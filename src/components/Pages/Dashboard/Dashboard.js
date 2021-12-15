import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 240;
const dashboardItem = [
	"Home",
	"Order List",
	"Pay",
	"Review",
	"Handle Service",
	"Add Service",
	"Manage Booking",
];
function Dashboard(props) {
	const menuBar = <FontAwesomeIcon icon={faBars} />;
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className="text-center my-3">
				<img
					className="w-50"
					src="https://i.ibb.co/T47rtw9/Screenshot-2021-12-14-235848-removebg-preview.png"
					alt="logo-img"
				/>
			</div>
			<Divider />
			<List>
				{dashboardItem.map((item) => {
					return (
						<p className="text-center fw-bold" key={item}>
							<a className="text-decoration-none text-white" href="#">
								{item}
							</a>
						</p>
					);
				})}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				style={{ background: "#212529" }}
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<div style={{ fontSize: "2rem" }}>{menuBar}</div>
					</IconButton>
					<div className="mx-auto">
						<Typography noWrap component="div">
							<h2 style={{ fontFamily: "Oswald" }}>Welcome To Dashboard</h2>
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					<div className="h-100 bg-dark text-white">{drawer}</div>
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					<div className="h-100 bg-dark text-white">{drawer}</div>
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
					dolor purus non enim praesent elementum facilisis leo vel. Risus at
					ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
					quisque non tellus. Convallis convallis tellus id interdum velit
					laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
					integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
					eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
					quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
					vivamus at augue. At augue eget arcu dictum varius duis at consectetur
					lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
					faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
					ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
					elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
					sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
					mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
					risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
					purus viverra accumsan in. In hendrerit gravida rutrum quisque non
					tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
					morbi tristique senectus et. Adipiscing elit duis tristique
					sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
					posuere sollicitudin aliquam ultrices sagittis orci a. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Fugit laudantium rem
					nulla dolorem pariatur consectetur error dignissimos. Veritatis vel
					recusandae mollitia laudantium voluptatibus esse laboriosam explicabo
					repellat quis. Amet pariatur blanditiis recusandae minima cum, nihil a
					soluta officiis ratione atque dolorum laboriosam, asperiores quos?
					Facilis vitae quisquam quis consequatur saepe ipsum est optio, autem
					amet voluptatibus architecto velit ad repellendus? Vel deleniti libero
					dolores. Iusto porro temporibus atque illo cupiditate earum eum
					laborum praesentium quaerat saepe quod numquam, harum minus cumque
					inventore. Laudantium incidunt ad explicabo reprehenderit alias? Illo
					nostrum in voluptates quia repellat rerum itaque nobis quam modi? Cum,
					voluptatem natus? Laboriosam eius rerum, earum a minus natus ea autem
					sed dolor quisquam cumque id, itaque odio totam quae modi
					reprehenderit sunt? Impedit aperiam, hic, incidunt porro, soluta
					commodi magnam facere aliquid quia dolor repellendus. Praesentium, ea
					facere error quasi ipsam in vel perferendis velit esse a culpa
					pariatur officiis labore asperiores illum est repudiandae voluptas!
					Laudantium, soluta error labore debitis, recusandae tenetur officiis
					nulla tempore minus optio tempora nostrum ratione nisi, provident est
					consectetur. Alias, veniam. Quibusdam odio quos, ipsum explicabo
					voluptates officia dolorum nulla, fugiat numquam nihil hic quo
					similique! Temporibus error labore voluptatem nesciunt numquam sequi
					tempore beatae quas impedit esse distinctio dicta aliquid nostrum eius
					dolore officiis illum, quidem magnam odio earum incidunt soluta?
					Placeat, voluptatem delectus ad dolore at corrupti aspernatur error
					aperiam voluptatum! Laboriosam, illum animi earum temporibus labore
					iure hic cupiditate ipsam dicta! Accusantium similique sint quis
					architecto, quo in officia facere deserunt id odio minus dolor iusto
					obcaecati ad ea sed voluptatem cum ducimus maiores quaerat eum magni
					at? Quos consectetur, soluta eaque est adipisci odio porro! Placeat,
					necessitatibus eaque? Atque, eligendi nisi! Fuga distinctio debitis
					dignissimos adipisci repudiandae neque aliquid reiciendis temporibus
					hic, id quos perspiciatis laborum culpa soluta similique excepturi
					voluptas quisquam vero odit illo ab nemo? Officiis ducimus sint non
					aliquam eveniet inventore alias quae omnis tempore asperiores
					mollitia, nihil porro deleniti, rerum pariatur eaque voluptatibus
					expedita ipsam vel consequatur ratione. Dignissimos, molestiae
					eligendi. Similique corrupti ipsam laboriosam nam porro, quidem dicta,
					ullam distinctio, cum est doloremque quae accusantium. Repellat
					laudantium omnis voluptatum possimus eveniet ipsam vel quia quaerat
					officiis maiores, error cupiditate impedit, iure tenetur vero eum
					accusamus! Quisquam, fugiat architecto? Quae ut ipsam sit sint. Quos
					reiciendis officiis ipsa distinctio amet dignissimos alias
					perspiciatis eos earum eaque et a expedita mollitia, accusamus impedit
					quasi eveniet quae possimus adipisci ratione id nemo fugit nisi
					consequuntur. Aspernatur eius neque nesciunt voluptate fuga debitis,
					fugiat sit nostrum ut similique tenetur eos modi veritatis cum nobis,
					soluta ab quia ex necessitatibus nam quo ea! Asperiores, dicta sequi.
					Perspiciatis, illo? Reprehenderit, cumque facilis, sapiente
					praesentium eaque voluptates quidem placeat eligendi mollitia ab quod
					error officia nisi! Iusto illo possimus explicabo reiciendis quibusdam
					officia quos voluptatibus ea, beatae maxime illum exercitationem,
					ipsam laborum itaque a neque praesentium incidunt molestias tempore!
					Sapiente eaque dolor ab nisi porro cupiditate vitae vel. Laboriosam,
					quibusdam. Corporis illo accusamus provident perferendis fugiat
					commodi aspernatur assumenda deleniti asperiores quaerat vel nulla
					consequuntur voluptatibus totam, quae quas quibusdam dolorum? Neque
					laborum consectetur quos voluptatem vero, ut vitae vel molestiae
					optio. Saepe fuga ipsum illo nobis excepturi quidem, facere
					distinctio, inventore maiores mollitia alias, sint fugit. Optio
					doloremque, quam, tenetur neque dolorem vitae fuga iste consectetur
					est quas eum, omnis modi commodi libero exercitationem aliquid nam?
					Fuga illum tempore est commodi quod quae porro culpa, cum dolore!
					Molestias vero, illo nisi praesentium dicta recusandae fuga, facilis
					sunt accusamus veritatis nostrum, doloribus nobis officia quis eos
					eaque. Eveniet aliquid illum nostrum ipsam enim corporis doloremque
					magnam deleniti, cum voluptatem tenetur, tempora adipisci similique
					magni dicta quasi itaque vero eligendi ea in id asperiores? Unde a
					molestias in voluptas numquam, architecto qui consequuntur, maxime
					ullam doloremque iste voluptatibus saepe, itaque nihil ratione
					provident libero at quas dicta! Consequuntur illum adipisci quod
					sequi, repellendus similique accusantium soluta facere eius autem
					totam blanditiis numquam alias non velit possimus architecto quidem
					itaque perferendis praesentium labore pariatur? Id accusantium ipsa
					necessitatibus possimus magni assumenda obcaecati animi repellat,
					debitis, voluptatum, in nisi dolores vero totam dolore! Ratione nobis
					quos sapiente temporibus voluptatum quod, fuga, suscipit, libero
					tenetur incidunt perspiciatis harum neque impedit excepturi deleniti
					placeat assumenda aliquam voluptate? Minima corrupti recusandae autem
					odit ex dolore molestiae animi voluptates obcaecati. Doloremque velit
					voluptatibus facilis doloribus officiis distinctio quos ipsa, illum
					eos nulla pariatur quis. Dolores est, facilis cupiditate autem
					expedita eaque deleniti mollitia suscipit et quidem eveniet, hic, eius
					perferendis? Quos, molestias optio? Debitis id provident pariatur sed!
					Aliquid maiores maxime officiis dignissimos nostrum odio iusto
					deserunt dolorem, accusamus officia similique hic mollitia, voluptatum
					numquam repellat nesciunt. Quis voluptates distinctio iure repellendus
					velit saepe dolores facilis officia ipsa a, praesentium animi soluta
					ratione neque aliquam quisquam reiciendis culpa! Libero non illo ipsam
					nam? Temporibus illo voluptas accusantium! Accusamus, molestias quis
					explicabo non atque sapiente, aut nulla a, odio laborum voluptate
					ipsum rem tempora soluta magnam sint harum ea totam tenetur qui veniam
					distinctio ex aliquam voluptas. Quod quibusdam eos blanditiis, ipsum
					praesentium qui rerum repudiandae earum quia ut corporis inventore
					veritatis, fuga non voluptas, expedita in nulla quidem! Impedit,
					ipsam! Harum sit ullam id, vel necessitatibus inventore deserunt
					rerum! Rem necessitatibus fugit, itaque ut ad amet ex dolorem officia
					inventore id ab voluptas asperiores aut nostrum ipsa tempore totam
					vero quod perferendis. Ipsa tempore labore necessitatibus iste quae
					quod ullam architecto impedit, saepe doloribus aliquam totam
					veritatis, a, esse ratione odio eum aperiam atque magni rerum cum
					alias est. Molestias voluptas dolorem quasi omnis neque vitae dolores
					cumque, ab provident expedita, ipsa amet nesciunt dolor deleniti est
					nulla eligendi. Asperiores voluptate natus veritatis, quis,
					perferendis earum rem atque inventore animi eos quos, quidem commodi
					doloribus suscipit enim! Modi voluptatum, magnam maiores deleniti
					assumenda officiis delectus quisquam nemo, ab necessitatibus eos
					dolorum culpa fuga? Provident repellendus obcaecati soluta quaerat
					asperiores voluptatibus. Quas corrupti sapiente dolorem sint
					repudiandae natus praesentium fugit nesciunt. Error eligendi alias
					blanditiis repudiandae tempore pariatur dolore vel aperiam atque, quam
					exercitationem iusto, unde, esse consectetur sit.
				</Typography>
			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;
