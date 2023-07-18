import { useState } from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Focus from './Focus'

export default function homePageContainer() {
  const [page, setPage] = useState('AboutMe')

  const renderPage = () => {
    if (page === 'AboutMe') {
      return <AboutMe handlePageChange={handlePageChange} />;
    }
    if (page === 'Portfolio') {
      // return <Focus />;
      return <Portfolio handlePageChange={handlePageChange} />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
    if (page === 'Project1') {
      return <Focus id={0} />;
    }
    if (page === 'Project2') {
      return <Focus id={1} />;
    }
    if (page === 'Project3') {
      return <Focus id={2} />;
    }
    if (page === 'Project4') {
      return <Focus id={3} />;
    }
    if (page === 'Project5') {
      return <Focus id={4} />;
    }
    if (page === 'Project6') {
      return <Focus id={5} />;
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

