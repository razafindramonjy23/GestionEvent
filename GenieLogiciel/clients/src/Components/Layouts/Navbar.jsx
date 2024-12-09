import React from 'react';
import { Link } from 'react-router-dom';

const listItem = [
	{ name: 'Accueil', path: '/' },
	{ name: 'Event', path: '/event' },
	{ name: 'A propos', path: '/a_propos' },
	{ name: 'Contact', path: '/contact' },
];

const Navbar = () => {
	return (
		<>
			<div className="fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-5 rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-20 mb-20">
				<ul className="flex gap-8 text-sm">
					{listItem.map((item) => (
						<li className="relative cursor-pointer group" key={item.name}>
							<Link to={item.path} className="text-white">
								{item.name}
							</Link>
							<span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
						</li>
					))}
				</ul>
				<Link to="/contact">
					<button className="px-6 py-1 text-lg font-semibold text-white shadow-2xl bg-gradient-to-r from-green-500 to-yellow-200 rounded-3xl hover:from-blue-600 hover:to-yellow-300 hover:shadow-green-500 shadow-blue-500">
						Contact
					</button>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
