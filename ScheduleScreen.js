import React, { useState } from "react"
import {Button, View} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';


const ScheduleScreen = ({navigation, route}) => {

    const [date, setDate] = useState(new Date())

    return (
      <View>
        <DateTimePicker textColor="black"
          modal
          mode="datetime"
          display="spinner"
          value={date}
          onChange={(event, date) => {
            setDate(date)
          }}
        />
      </View>
    )
  }

  export default ScheduleScreen;