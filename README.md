# Personal Portfolio Website

## Introduction
Welcome to my personal portfolio website, a React.js based project showcasing my expertise in AI & Machine Learning and Computer Science. This interactive website is segmented into various sections, including Home, About, Projects, Photography, and Contact, each designed to provide a comprehensive view of my professional and personal journey.

## Prerequisites
Before you begin, ensure the following tools are installed on your system:
- Node.js (Download from [Node.js website](https://nodejs.org/))
- npm (Usually installed with Node.js)

## Installation
Follow these steps to set up the project on your local machine:

1. **Clone the Repository**
   ```bash
   git clone [click the code button with the HTTPS link]
   ```
2. **Navigate to Project Directory**
   ```bash
   cd portfolio
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```

## Running the Application
To view the website locally:

1. **Start the Development Server**
   ```bash
   npm start
   ```
2. **Access the Website**
   Open `http://localhost:3000/` in a web browser.

## Website Structure

### Home Page (`Home.js`)
- **Hero Section**: Features a greeting and a brief introduction. It dynamically displays the current time based on the Pacific Time Zone and indicates my availability for work.
- **Animations**: Uses `framer-motion` for smooth animation effects.

### About Page (`About.js`)
- **Profile Information**: Offers more in-depth information about my educational background, interests, and hobbies.
- **Dynamic Portraits**: Cycles through a series of personal portraits using a timer to add a personal touch.

### Projects Page (`Projects.js`)
- **Project Showcase**: Displays a list of my projects with descriptions, images, and links to GitHub repositories.
- **Interactive UI**: Each project card is interactive, enlarging upon hover for better visibility.

### Photography Page (`Photo.js`)
- **Photo Gallery**: A collection of my photography work, allowing users to navigate through images using arrow buttons.
- **Responsive Design**: Ensures the gallery is viewable on various devices, maintaining aesthetic appeal and functionality.

### Contact Page (`Contact.js`)
- **Contact Form**: Allows visitors to send me messages directly through the website.
- **Email Integration**: Utilizes `emailjs` for seamless email integration.
- **Social Links**: Direct links to my social media profiles for further networking.

## Additional Notes
- **Local Development**: The website runs on `localhost:3000` by default.
- **Troubleshooting**: Ensure all dependencies are installed. If issues persist, check the console for specific error messages.
