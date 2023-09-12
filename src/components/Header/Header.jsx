const Header = () => {
  return (
    <div>
      <div className="navbar bg-cyan-950 text-white flex justify-between  items-center lg:px-24 lg:py-3">
        <div className="">
          <a className="font-extrabold text-2xl">Knowledge Cafe</a>
        </div>
        <div className="">
          <label className="btn btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="./profile.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;