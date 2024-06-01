import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import Aboutus from '../components/Aboutus'
// import Choosewisely from './components/Choosewisely'
import Cards from '../components/Cards'
import Courses from '../components/Courses'
import FAQs from '../components/FAQs'
import StudyHub from '../components/StudyHub'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <><div>
            <Header/>
        </div><div>
                <Herosection />
            </div>
            <div>
                <Aboutus />
            </div>

            <div>
                <Cards />
            </div>
            <div>
                <Courses />
            </div>
            <div>
                <FAQs />
            </div>
            <div>
                <StudyHub />
            </div>
            <div>
                <Contactus />
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}

export default Home