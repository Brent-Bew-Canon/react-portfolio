import { useState } from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function homePageContainer() {
  const [page, setPage] = useState('AboutMe')

  const renderPage = () => {
    if (page === 'AboutMe') {
      return <AboutMe />;
    }
    if (page === 'Portfolio') {
      return <Portfolio />;
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
      <Footer />
    </>
  )
}
