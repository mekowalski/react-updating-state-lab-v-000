import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {resolution: '1080p'}
      }
    }
  }

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  setResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.setBitrate}/>
        <button className='resolution' onClick={this.setResolution}/>
      </div>
    )
  }
}

export default YouTubeDebugger
