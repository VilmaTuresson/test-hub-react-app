// import React from "react";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Avatar from "../../components/Avatar";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { useSetProfileData } from "../../contexts/ProfileDataContext";
// import styles from "../../styles/Profile.module.css";

// const Profile = (props) => {
//   const { profile, imageSize = 55 } = props;
//   const { id, following_id, profile_img, owner } = profile;

//   const currentUser = useCurrentUser();
//   const is_owner = currentUser?.username === owner;

//   const { handleFollow, handleUnfollow } = useSetProfileData();

//   return (
//     <div>
//       <div>
//         <Link to={`/profiles/${id}`}>
//           <Avatar src={profile_img} height={imageSize} />
//         </Link>
//       </div>
//       <div>{owner}</div>
//       <div>
//         {currentUser &&
//           !is_owner &&
//           (following_id ? (
//             <Button
//               onClick={() => handleUnfollow(profile)}
//               className={styles.FollowBtn}
//             >
//               unfollow
//             </Button>
//           ) : (
//             <Button
//               onClick={() => handleFollow(profile)}
//               className={styles.FollowBtn}
//             >
//               follow
//             </Button>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Profile;
