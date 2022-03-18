import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem.js';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => {
        return <MeetupItem
          key={meetup.id}
          image={meetup.image}
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      })}
    </ul>
  )
}

export default MeetupList;