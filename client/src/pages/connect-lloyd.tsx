import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
    checkLoginState: () => void;
  }
}

interface LoginStatus {
  status: "connected" | "not_authorized" | "unknown";
  authResponse?: {
    accessToken: string;
    expiresIn: string;
    signedRequest: string;
    userID: string;
  };
}

export default function ConnectLloyd() {
  const [loginStatus, setLoginStatus] = useState<LoginStatus | null>(null);
  const [userName, setUserName] = useState<string>("");

  const statusChangeCallback = (response: LoginStatus) => {
    console.log("Login status:", response);
    setLoginStatus(response);

    if (response.status === "connected") {
      // User is logged into Facebook and your app
      window.FB.api("/me", function (userResponse: any) {
        console.log("Successfully logged in as: " + userResponse.name);
        setUserName(userResponse.name);
      });
    } else if (response.status === "not_authorized") {
      // User is logged into Facebook, but not your app
      console.log("Please log into this app.");
    } else {
      // User is not logged into Facebook
      console.log("Please log into Facebook.");
    }
  };

  const checkLoginState = () => {
    window.FB.getLoginStatus(function (response: LoginStatus) {
      statusChangeCallback(response);
    });
  };

  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "676079095347490",
        cookie: true,
        xfbml: true,
        version: "v24.0",
      });
      window.FB.AppEvents.logPageView();

      // Check login status on page load - DISABLED FOR DEBUGGING
      // window.FB.getLoginStatus(function (response: LoginStatus) {
      //   statusChangeCallback(response);
      // });
    };

    // Make checkLoginState available globally for FB button
    window.checkLoginState = checkLoginState;

    // Load the Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleConnect = () => {
    if (window.FB) {
      // WhatsApp Embedded Signup flow with proper scopes
      window.FB.login(
        function (response: any) {
          console.log("Login response:", response);
          if (response.authResponse) {
            console.log("Successfully logged in", response);
            statusChangeCallback(response);
            
            // After login, the embedded signup should have completed
            // You can now fetch the WABA details using the access token
            const accessToken = response.authResponse.accessToken;
            console.log("Access Token:", accessToken);
            
            // You can use this token to call your backend to retrieve
            // the WhatsApp Business Account details
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        },
        {
          config_id: "1330172168108416",
          // Let the config handle all parameters without overriding
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Connect to Lloyd
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Our scheduling agent is ready to help you!
            </p>
          </div>

          {loginStatus?.status === "connected" && userName ? (
            <div className="pt-8 space-y-4">
              <div className="text-2xl font-semibold text-green-600">
                ✓ Connected successfully!
              </div>
              <p className="text-lg text-gray-700">
                Welcome, {userName}! You're now connected to Lloyd.
              </p>
            </div>
          ) : (
            <>
              <div className="pt-8">
                <Button
                  onClick={handleConnect}
                  size="lg"
                  className="text-xl px-12 py-8 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Connect to Lloyd, our scheduling agent!
                </Button>
              </div>

              <p className="text-sm text-gray-500 pt-4">
                Click the button above to connect your Facebook account and
                start scheduling with Lloyd
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
