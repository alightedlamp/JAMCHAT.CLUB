// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'
import JamInfoBar from './JamInfoBar'
import InstrumentPanel from './instrument/InstrumentPanel'

type Props = {
  title: string,
  createdBy: string,
  bpm: string,
}

/*
  ToneWrapper wraps ToneJS, so we send it the users' instruments
  and sequences from this top-level element
*/

const JamPanel = ({ title, createdBy, bpm }: Props) => (
  <PanelWrapper width="calc(100% - 400px)">
    <JamInfoBar title={title} createdBy={createdBy} bpm={bpm} />
    <InstrumentPanel />
    {/* <VisitorsInstrumentPanel />
    <ArrangementPanel /> */}
  </PanelWrapper>
)

export default JamPanel
