# To-Do Manager with Framer Motion Animation
![To-Do Manager App](https://i.imgur.com/example-image.png)

## ✨ Features

- **Interactive Cards**: Drag and drop cards with smooth animations
- **Create Notes**: Add new notes with title and description
- **Delete Notes**: Remove unwanted notes easily
- **View Details**: Expand notes to view full content
- **Local Storage**: Your notes persist between sessions
- **Responsive Design**: Works on mobile and desktop devices
- **Dark Mode**: Sleek dark-themed interface

## 🚀 Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Advanced animations library
- **Tailwind CSS**: Utility-first CSS framework
- **Ant Design**: UI components
- **React Icons**: Icon library
- **Local Storage API**: Client-side data persistence

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/ir-shaad0812/-planner-next-framer.git  
cd toDoManager-FramerAnimated
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── AddButton.tsx     # Button to open add modal
│   ├── AddModal.tsx      # Modal for adding new notes
│   ├── Background.tsx    # Background component
│   ├── Card.tsx          # Note card component
│   ├── Foreground.tsx    # Main content area
│   └── ViewModal.tsx     # Modal for viewing note details
├── data/                 # Data files
│   └── SampleData.ts     # Sample notes data
└── public/               # Static assets
```

## 📝 Usage

- **Adding Notes**: Click the plus button to create a new note
- **Moving Notes**: Drag and drop notes anywhere on the screen
- **Viewing Notes**: Click on a note to view its full content
- **Deleting Notes**: Click the X button on a note to delete it

## 🔧 Customization

You can customize the sample data in `data/SampleData.ts` to include your own default notes.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with 💌 using Next.js and Framer Motion by Mohammad IrshaD Aalam.
