import React from "react"
import DateTimePicker from '@react-native-community/datetimepicker';


const ScheduleScreen = ({navigation, route}) => {

    const [date, setDate] = useState(Date.now())
    const [open, setOpen] = useState(false)
  
    return (
      <>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DateTimePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </>
    )
  }

  export default ScheduleScreen;