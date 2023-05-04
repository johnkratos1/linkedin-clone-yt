import React from 'react'
import './Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord className='icn' />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('John Dev', 'New LikedIn Clone Completed ✅')}
      {newsArticle('Follow John', 'New Naira Noted Design💵')}
      {newsArticle('Happy Thursday', 'TGIF is around the corner 🎊')}
      {newsArticle('Next js 13', 'Awesome features to try out 🔥')}
      {newsArticle('Hustle Thursday', 'Making Money Non-Stop 💪')}
    </div>
  )
}

export default Widgets
