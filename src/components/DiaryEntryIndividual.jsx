const EntryHeader = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

const EntryBody = ({ entryData }) => {
  return (
    <div>
      <small>{entryData.date}</small>
      <p>{entryData.body}</p>
    </div>
  );
};

const DiaryEntry = ({ entryData }) => {
  return (
    <div>
      <EntryHeader title={entryData.title} />
      <EntryBody entryData={entryData} />
    </div>
  );
};

export default DiaryEntry;
