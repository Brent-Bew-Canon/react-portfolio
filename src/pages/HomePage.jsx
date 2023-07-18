import { useState } from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Project from './Project'

export default function homePageContainer() {
  const [page, setPage] = useState('AboutMe')

  const renderPage = () => {
    if (page === 'AboutMe') {
      return <AboutMe handlePageChange={handlePageChange} />;
    }
    if (page === 'Portfolio') {
      // return <Project />;
      return <Portfolio handlePageChange={handlePageChange} />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
    if (page === 'Project1') {
      return <Project id={0} />;
    }
    if (page === 'Project2') {
      return <Project id={1} />;
    }
    if (page === 'Project3') {
      return <Project id={2} />;
    }
    if (page === 'Project4') {
      return <Project id={3} />;
    }
    if (page === 'Project5') {
      return <Project id={4} />;
    }
    if (page === 'Project6') {
      return <Project id={5} />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setPage(page);

  return (
    <>
      <Nav handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer handlePageChange={handlePageChange} />
    </>
  )
}

