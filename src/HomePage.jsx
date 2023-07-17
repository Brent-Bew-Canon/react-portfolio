import { useState } from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Footer from './Footer'
import Nav from './Nav'

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
      <Nav page={page} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  )
}

// export default HomePage
