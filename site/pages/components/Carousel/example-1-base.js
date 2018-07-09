/**
 * cn - 基本用法
 * en - Base
 */
import React, { Component } from 'react'
import { Carousel, Select } from 'shineout'

const containerStyle = {
  fontSize: 40, color: '#fff', display: 'flex', margin: 'auto',
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: 5000,
      animation: 'slide',
      indicatorType: 'circle',
      indicatorPosition: 'center',
    }
  }

  propChange(key, value) {
    this.setState({ [key]: value })
  }

  render() {
    const {
      interval, animation, indicatorPosition, indicatorType,
    } = this.state

    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          animation:{' '}
          <Select
            data={['slide', 'slide-y', 'fade']}
            style={{ width: 100 }}
            value={animation}
            onChange={this.propChange.bind(this, 'animation')}
          />
          {'　indicatorPosition: '}
          <Select
            data={['left', 'center', 'right']}
            style={{ width: 90 }}
            value={indicatorPosition}
            onChange={this.propChange.bind(this, 'indicatorPosition')}
          />
          {'　indicatorType: '}
          <Select
            data={['circle', 'number', 'line']}
            style={{ width: 90 }}
            value={indicatorType}
            onChange={this.propChange.bind(this, 'indicatorType')}
          />

        </div>

        <Carousel
          style={{ width: 500, height: 300 }}
          interval={interval}
          animation={animation}
          indicatorPosition={indicatorPosition}
          indicatorType={indicatorType}
        >
          <div style={{ background: '#666', display: 'flex' }}>
            <div style={containerStyle}>
              Page 1
            </div>
          </div>
          <div style={{ background: '#fa8c16', display: 'flex' }}>
            <div style={containerStyle}>
              Page 2
            </div>
          </div>
          <div style={{ background: '#eb2f96', display: 'flex' }}>
            <div style={containerStyle}>
              Page 3
            </div>
          </div>
          <a href="javascript:;">
            <img alt="" style={{ width: '100%', height: '100%' }} src="/images/1_b.jpg" />
          </a>
        </Carousel>
      </div>
    )
  }
}