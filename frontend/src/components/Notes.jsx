import React from 'react';

const notes = [
    {
        id: 1,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 2,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 3,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 4,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 5,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 6,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 7,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 8,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 9,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 10,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 11,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 12,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 13,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 14,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 15,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 16,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 17,
        title: "CPA Global Strategy And Leadership HD",
        pages: 115,
        grade: "HD",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    },
    {
        id: 18,
        title: "CPA Australia - Advanced Taxation",
        pages: 779,
        grade: "Pass",
        category: "Business and commerce",
        image: "note-thumbnail.png"
    }
];

const styles = {
    body: {
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#a32505"
    },
    header: {
        background: "#333",
        color: "white",
        padding: "1rem",
        textAlign: "center"
    },
    navLink: {
        color: "white",
        margin: "0 1rem",
        textDecoration: "none"
    },
    activeNavLink: {
        fontWeight: "bold"
    },
    searchBar: {
        textAlign: "center",
        margin: "2rem 0"
    },
    searchBarInput: {
        padding: "0.5rem",
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "0.25rem"
    },
    searchBarButton: {
        padding: "0.5rem",
        border: "1px solid #007BFF",
        backgroundColor: "#007BFF",
        color: "white",
        borderRadius: "0.25rem",
        cursor: "pointer"
    },
    notesGrid: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    noteCard: {
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        margin: "1rem",
        padding: "1rem",
        width: "250px",
        backgroundColor: "white",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    },
    noteCardImage: {
        width: "100%",
        height: "auto",
        borderBottom: "1px solid #ccc",
        marginBottom: "0.5rem"
    },
    noteCardTitle: {
        fontSize: "1.25rem",
        margin: "0.5rem 0"
    },
    noteCardText: {
        margin: "0.25rem 0",
        color: "#555"
    }
};

const Notes = () => {
    return (
        <div style={styles.body}>
            
            <main>
                <header>
                    
                </header>
                <div style={styles.notesGrid}>
                    {notes.map(note => (
                        <div key={note.id} style={styles.noteCard}>
                            <img src={note.image} alt={note.title} style={styles.noteCardImage} />
                            <h3 style={styles.noteCardTitle}>{note.title}</h3>
                            <p style={styles.noteCardText}>{note.pages} Pages | Grade: {note.grade}</p>
                            <p style={styles.noteCardText}>{note.category}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Notes;
