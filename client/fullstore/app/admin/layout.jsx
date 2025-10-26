import Link from "next/link";
import "../../public/css/sb-admin-2.min.css";
import "../../public/css/fontawesome-free/css/all.min.css";
import "../../public/css/adminAnimations.css"; // novo CSS com as animações

export default function AdminLayout({ children }) {
    return (
        <div id="wrapper">
            {/* Sidebar */}
            <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/* Marca */}
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="/admin"
                >
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-desktop"></i>
                    </div>
                    <div className="sidebar-brand-text mx-2">FullStore Backoffice</div>
                </a>

                <hr className="sidebar-divider my-0" />

                {/* Início */}
                <li className="nav-item active icon-animate">
                    <Link className="nav-link" href="/admin">
                        <i className="fas fa-home"></i>
                        <span>Início</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Menu</div>

                {/* Produtos */}
                <li className="nav-item icon-animate">
                    <Link className="nav-link" href="/admin/produtos">
                        <i className="fas fa-box-open"></i>
                        <span>Produtos</span>
                    </Link>
                </li>

                {/* Marcas */}
                <li className="nav-item icon-animate">
                    <Link className="nav-link" href="/admin/marcas">
                        <i className="fas fa-tags"></i>
                        <span>Marcas</span>
                    </Link>
                </li>

                {/* Categorias */}
                <li className="nav-item icon-animate">
                    <Link className="nav-link" href="/admin/categorias">
                        <i className="fas fa-list-alt"></i>
                        <span>Categorias</span>
                    </Link>
                </li>
                {/* Perfils */}
                <li className="nav-item icon-animate">
                    <Link className="nav-link" href="/admin/perfils">
                        <i className="fas fa-address-card"></i>
                        <span>Perfils</span>
                    </Link>
                </li>

                {/* Usuarios */}
                <li className="nav-item icon-animate">
                    <Link className="nav-link" href="/admin/usuarios">
                        <i className="fas fa-user"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>
            </ul>

            {/* Conteúdo principal */}
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <button
                            id="sidebarToggleTop"
                            className="btn btn-link d-md-none rounded-circle mr-3"
                        >
                            <i className="fa fa-bars"></i>
                        </button>

                        <ul className="navbar-nav ml-auto">
                            <div className="topbar-divider d-none d-sm-block"></div>

                            <li className="nav-item dropdown no-arrow">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="userDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                        Usuário
                                    </span>
                                    <img
                                        className="img-profile rounded-circle"
                                        src="/img/user.jpg"
                                        alt="Usuário"
                                    />
                                </a>

                                <div
                                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown"
                                >
                                    <div className="dropdown-divider"></div>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#logoutModal"
                                    >
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Área de conteúdo */}
                    <div className="container-fluid">
                        <div style={{ minHeight: 800 }}>{children}</div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; PFS² 2025</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
