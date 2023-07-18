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
      return <Focus />;
      // return <Portfolio />;
    }
    if (page === 'Contact') {
      return <Contact />;
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

