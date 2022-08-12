import React, { FC } from 'react'
import C from '@/components'
import { Flex } from '@/components/mobile/layout/Flex'
import { useHistory } from 'react-router-dom'

const About: FC = () => {
  const history = useHistory()
  return (
    <div className="App">
      this is about page
      <Flex>
        <C.WebHomeCount />
      </Flex>
      <div onClick={() => {
        history.push('/')
      }}>去首页</div>
    </div>
  )
}

export default About
