import React from 'react'
import { Viewer } from './components'

const viewer = typeof window !== 'undefined' ? Viewer : <div/>

export default viewer
