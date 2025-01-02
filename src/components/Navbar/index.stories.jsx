import { Navbar } from './index';
import { logoData, links } from './mock';

export default {
  title: 'My Components/Navbar',
  component: Navbar,
  // args: {
  //   links,
  //   logoData,
  // },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = {
  args: {
    links,
    logoData,
  },
};

// export const Template = (args) => {
//   return (
//     <>
//       <Navbar {...args} />
//       <section
//         style={{
//           backgroundColor: 'rgba(0,0,0,.1)',
//           maxWidth: '1200px',
//           height: '200vh',
//           margin: '0 auto',
//           padding: '30px',
//         }}
//       >
//         <h1>Ola mundo</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam nulla
//           dignissimos quibusdam quisquam earum illum necessitatibus. Vitae
//           aliquam, itaque odio, repellat culpa enim et reiciendis quos eum iste
//           libero!
//         </p>
//         <br />
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam nulla
//           dignissimos quibusdam quisquam earum illum necessitatibus. Vitae
//           aliquam, itaque odio, repellat culpa enim et reiciendis quos eum iste
//           libero!
//         </p>
//         <br />
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam nulla
//           dignissimos quibusdam quisquam earum illum necessitatibus. Vitae
//           aliquam, itaque odio, repellat culpa enim et reiciendis quos eum iste
//           libero!
//         </p>
//       </section>
//     </>
//   );
// };
