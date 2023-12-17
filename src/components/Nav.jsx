import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// function BeatingHeart() {
//   const heartbeatVariants = {
//     beat: {
//       scale: [1, 1.3, 1],
//       transition: {
//         repeat: Infinity,
//         repeatDelay: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.a
//       href="#"
//       whileHover="beat"
//       variants={heartbeatVariants}
//       title="Liked movies"
//     >
//       <FontAwesomeIcon icon={faHeart} />
//     </motion.a>
//   );
// };

function Nav({ loggedIn, logOut }) {
  return (
    <header>
      <nav
        className="w-full h-[13vh] px-navHero flex items-center justify-between 
              text-white absolute top-0 left-0 z-10"
      >
        <Link
          to={"/"}
          preventScrollReset={true}
          className="px-2 border-2 border-white rounded-lg backdrop-blur-3xl 
                hover:shadow-logoShadow transition-shadow duration-300
                uppercase text-[2.5vmax]"
        >
          binge watch
        </Link>

        {loggedIn ? (
          <div
            onClick={logOut}
            className="p-2 text-[1.5vmax] hover:underline underline-offset-4
               cursor-pointer"
          >
            Log Out
          </div>
        ) : (
          <div className="flex items-center gap-[2vmin]">
            <Link
              to={"/signIn"}
              className="p-2 text-[1.5vmax] hover:underline underline-offset-4"
            >
              Sign In
            </Link>

            <Link
              to={"/signUp"}
              className="p-2 text-[1.5vmax] hover:underline underline-offset-4"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
