
import Chatbot from '../components/chatbot'
import HeroSection from '../components/common/hero'
import { Card } from '../components/common/card'

export const Dashboard= ()=> {
  return (
    <div className='overflow-hidden font-Onest'>
    <HeroSection/>
    <Card/>
    <Chatbot/>
    </div>
  )
}
