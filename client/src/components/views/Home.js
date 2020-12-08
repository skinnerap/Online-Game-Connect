import React from 'react';
import { Container } from 'react-bootstrap';
import Infographic from '../ui/Infographic';
import Navigation from '../ui/Navigation';
import Author from '../ui/Author';
import Header from '../ui/Header';
import Logo from '../ui/Logo';
import './home.css';
import firebase from 'firebase';
// Required for side-effects
require("firebase/firestore");

const Home = ( props ) => {

    if (!firebase.apps.length) {
        try {
            // Initialize Cloud Firestore through Firebase
            firebase.initializeApp({
                apiKey: 'AIzaSyDYu9Aq5HBHqk71sMZIDjnmzPy9NBFTJdM',
                authDomain: 'game-connect-5f273.firebaseapp.com',
                projectId: 'game-connect-5f273',
                storageBucket: "game-connect-5f273.appspot.com",
                messagingSenderId: "149616387493",
                appId: "1:149616387493:web:fa1666593723eac7b2344c",
                measurementId: "G-T7KZRL22BK"
            });
        } catch (err) {
            console.error('Firebase initialization error raised', err.stack)
        }
    }
    

    const db = firebase.firestore();

    return (
        <Container fluid>
            <Logo />
            <Header />
            <Navigation db={db} />
            <Infographic />
            <Author />
        </Container>
    )
}

export default Home;