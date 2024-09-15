import "./App.css";

const Container = () => {
  const studentData = [
    {
      rollNum: 180791,
      name: "Zulfiqar Ali",
      class: "Web And App Development",
      slot: "Sir Bilal Attari (TTS) 9am to 11am (HeadOffice)",
    },

    {
      rollNum: 189977,
      name: "Muhammad Rumman",
      class: "Web And App Development",
      slot: "Sir Shehzad (TTS) 11am to 1pm (HeadOffice)",
    },
    {
      rollNum: 184334,
      name: "Sahil Ahmed",
      class: "Web And App Development",
      slot: "Sir Shehzad (TTS) 11am to 1pm (HeadOffice)",
    },
    {
      rollNum: 185997,
      name: "Munawar Khan",
      class: "Web And App Development",
      slot: "Sir Bilal Attari (TTS) 9am to 11am (HeadOffice)",
    },
    {
      rollNum: 174431,
      name: "Ahmed Raza",
      class: "Web And App Development",
      slot: "Sir Bilal Attari (MWF) 9am to 11am (HeadOffice)",
    },
    {
      rollNum: 218761,
      name: "Saif Ali",
      class: "Web And App Development",
      slot: "Sir Bilal Attari (MWF) 9am to 11am (HeadOffice)",
    },
  ];

  return (
   <div className="student-datasheet">
     <div className="container">
      <div className="heading">Zulfiqar: Student Data Sheet</div>
      <hr />
      <div className="header-row">
        <span className="header-item">Name</span>
        <span className="header-item">Roll No</span>
        <span className="header-item">Class</span>
        <span className="header-item">Slot</span>
      </div>
      {studentData.map((student, index) => (
        <div key={index} className="data-row">
          <span className="data-item">{student.name}</span>
          <span className="data-item">{student.rollNum}</span>
          <span className="data-item">{student.class}</span>
          <span className="data-item">{student.slot}</span>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Container;
