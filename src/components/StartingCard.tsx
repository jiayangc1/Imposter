import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";

import { Github } from "lucide-react";

function StartingCard() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Card className="w-full max-w-sm border-accent animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
        <CardHeader>
          <img 
            src={logo} 
            className="-mt-10 -mb-10 animate-in fade-in-0 zoom-in-95 duration-700 delay-100"
            alt="Imposter Logo"
          />
          <CardTitle className="text-center text-4xl font-extrabold animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-200">
            Imposter
          </CardTitle>
          <CardDescription className="text-center text-lg text-chart-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-300">
            Word Game
          </CardDescription>
          <CardDescription className="animate-in fade-in-0 duration-500 delay-400">
            A party game of hidden ideas and cunning clues
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-500">
          <Link to="/play">
            <Button
              variant="default"
              className="w-full p-6 mb-3 hover:scale-105 active:scale-95 transition duration-200"
            >
              Get Started
            </Button>
          </Link>
          <Link to="/how">
            <Button
              variant="outline"
              className="w-full p-6 hover:scale-105 active:scale-95 transition duration-200"
            >
              How to Play
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Link
        to="https://github.com/jiayangc1/imposter"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3"
      >
        <Button
          variant="outline"
          size="icon"
          className="text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition duration-200 animate-in fade-in-0 duration-700 delay-700"
        >
          <Github className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}

export default StartingCard;
