import { useAuth } from "../../context/auth-context";
import "./profile.css";
import { Navbar } from "../../components/";

export const Profile = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <Navbar />
      <main>
        <div className="user--container">
          <h1 className="heading--3 text--center">My Account</h1>
          <div className="avatar--container">
            <img
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="Randomuser"
              className="avatar avatar--circle avatar--xl"
            />
          </div>

          {user ? (
            <div>
              <div className="email--container">
                <p className="email--label">Email</p>
                <p className="email--content">{user?.email}</p>
              </div>
              <div className="m-t-1 m-h-1 text--center">
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            "Not Logged In"
          )}
        </div>
      </main>
    </>
  );
};
