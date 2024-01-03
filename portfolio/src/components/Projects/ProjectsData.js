import CSSlogo from "../assets/Logo-lang/CSS.png";
import htmlang from "../assets/Logo-lang/HTML.png";
import chartjs from "../assets/Logo-lang/chartJS.png";
import JavaLogo from "../assets/Logo-lang/j-s.svg";
import dis from "../assets/Logo-lang/dis.png";
import react from "../assets/Logo-lang/react.png";
import JavaSciptLogo from "../assets/Logo-lang/1492.png";
import GoogleTrans from "../assets/Logo-lang/Google.png";
import Cplus from "../assets/Logo-lang/C-plus.png";

import GoFish from "../assets/projects-icons/GoFish.png";
import filmVault from "../assets/projects-icons/filmVault.png";
import thread from "../assets/projects-icons/thread.png";
import encry from "../assets/projects-icons/encry.png";
import Card from "../assets/projects-icons/card.png";
import bot from "../assets/projects-icons/bot.png";
import fin from "../assets/projects-icons/fin.png";
import wasd from "../assets/projects-icons/wasd.png";
import small from "../assets/projects-icons/small.png";
const projectsData = [
  
        { title: 'Discord Translation bot', 
          description: 'Within Discord servers, this Discord bot offers translation services. It can use the Google Cloud Translation API to translate text into a number of different languages.', 
          image: bot, 
          languages: [react, dis, JavaLogo, JavaSciptLogo, GoogleTrans],  
          githubLink: 'https://github.com/tankit03/Discord-Translation-Bot'
          
        },
        { title: 'Personal Finance App', 
        description: 'Discover our Personal Finance Management System: a secure, user-friendly platform that turns your spending data into clear, actionable visuals.  Your path to a clearer financial future starts here.', 
        image: fin, 
        languages: [react, JavaLogo, JavaSciptLogo, chartjs, htmlang, CSSlogo ],
        githubLink: 'https://github.com/kaushikdontula/CS361-team-repository'     
        },
        { title: 'Go Fish Card Game', 
        description: 'simulate a game of Go Fish between a human player and a computer opponent. Go Fish is a card game played with a standard deck of 52 cards. The objective of the game is to collect as many sets of four cards of the same rank as possible.', 
        image: GoFish, 
        languages: [Cplus],
        githubLink: 'https://github.com/tankit03/Go-fish-game',         
        },
        { title: 'Hunt the Wumpus', 
        description: 'This program is a text-based adventure game called "Hunt the Wumpus." In this game, players are tasked with exploring a dark cave filled with dangers and treasures.', 
        image: wasd, 
        languages: [Cplus],
        githubLink: 'https://github.com/tankit03/hunt-the-wumpus-game',         
        },
        { title: 'smallsh Shell', 
        description: 'a custom shell written in C. smallsh incorporates a subset of features from well-known shells like bash. This guide will help you compile, run, and effectively use smallsh.', 
        image: small, 
        languages: [Cplus],
        githubLink: 'https://github.com/tankit03/Smallsh-OS',         
        },
        { title: 'One Time Pad Encryption', 
        description: ' suite of five small programs that collectively implement a one-time pad-like encryption system. These programs utilize multi-processing and socket-based inter-process communication, and are accessible via standard Unix command line features.', 
        image: encry, 
        languages: [Cplus],
        githubLink: 'https://github.com/tankit03/CrypticPad-The-One-Time-Pad-Encryption-Suite',         
        },
        { title: 'Multi threaded Consumer Counter ', 
        description: 'C-based implementation focusing on multi-threading, mutual exclusion, and condition variables.', 
        image: thread, 
        languages: [Cplus],
        githubLink: 'https://github.com/tankit03/Multi-threaded-Producer-Consumer-Counter',         
        },
        { title: 'FilmVault: Unix-Powered Movie Data Management', 
        description: 'The program is designed to handle file and directory operations, including reading and processing CSV files, and creating and writing to new directories and files.', 
        image: filmVault, 
        languages: [Cplus],
        githubLink: 'https://github.com/tankit03/Unix-File-Explorer-Processing-and-Organizing-Movie-Data',         
        },

 
];

export default projectsData;