import "./references.scss";
// import HouseSidingIcon from "@mui/icons-material/HouseSiding";
// import Face3Icon from "@mui/icons-material/Face3";
// import PersonIcon from "@mui/icons-material/Person";

export default function References() {
  const data = [
    {
      id: 1,
      name: "Sherry Hallmark",
      title: "Director of New Accounts",
      desc: "I have worked together with Tierney Allen for several years at Pickett Property Management. Tierney is a consumate team player; always supporting her co-workers with enthusiasm and expertise to accomplish tasks and provide valuable input. She is exceptionally well organized and professional in all aspects of her profession.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Leah Choco",
      title: "Full Stack Bootcamp Classmate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="references" id="references">
      <h1>References</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top"></div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
