// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../Footer'
import PageWrapper from '../PageWrapper'
import HeroBlockWrapper from '../HeroBlockWrapper'
import ContentBlock from '../ContentBlock'

import { APP_DESCRIPTION } from '../../config'

const title = 'About'

const About = () => (
  <PageWrapper>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: APP_DESCRIPTION },
        { property: 'og:title', content: title },
      ]}
    />
    <HeroBlockWrapper color="#f9c52c">
      <ContentBlock>
        <h2 className="f2 lh-title mt3">About</h2>
        <p className="lh-copy mt5">
          JAMCHAT.CLUB is a full stack JavaScript application written (mostly) by Philip Harrell.
          The application lets users create and join chat rooms, in which they get to choose an
          instrument to play while chatting with others. It uses React, Redux, Socket.io, and
          Tone.js for the heavy lifting.
        </p>
        <p className="lh-copy mt3">
          Speaking of lifting, much of the boilerplate was introduced to me through{' '}
          <a href="https://github.com/verekia/js-stack-from-scratch">@verekia&rsquo;s</a> wonderful
          JavaScript Stack from Scratch tutorial, without which I wouldn&rsquo;t have understood so
          clearly how all the pieces in a modern full stack JavaScript application fit toghether.
        </p>
        <p className="lh-copy mt3">
          This is an open source project which is{' '}
          <a href="https://github.com/alightedlamp/JAMCHAT.CLUB">hosted on GitHub</a>. If you want
          to contribute or report any bugs, please do so{' '}
          <a href="https://github.com/alightedlamp/JAMCHAT.CLUB">there</a>.
        </p>
      </ContentBlock>
    </HeroBlockWrapper>
    <Footer />
  </PageWrapper>
)

export default About
