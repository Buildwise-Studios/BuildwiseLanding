import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Tos from "@/pages/tos";
import AIProductManager from "@/pages/ai-product-manager";
import PrivacyPolicy from "@/pages/privacy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ai-product-manager" component={AIProductManager} />
      <Route path="/terms-of-services" component={Tos} />
      <Route path="/privacy-policy" component={PrivacyPolicy } />
      <Route path="/:rest*" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
