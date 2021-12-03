import React from 'react'
import TimePicker from 'react-time-picker'

class App extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <TimePicker
          className='input-field'
          theme='Ash'
          placeholder='Start Time'
          onSet={(val) => {
            alert('val:' + val.format24)
          }}
        />

        <TimePicker
          time='01:00'
          className='input-field'
          theme='Instagram'
          placeholder='Start Time'
          onSet={(val) => {
            alert('val:' + val.format12)
          }}
        />
      </div>
    )
  }
}
export default App
