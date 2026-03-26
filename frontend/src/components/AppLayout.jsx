import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function AppLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Trendora
                </span>
                <button onClick={() => setMobileOpen(true)} className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Menu size={24} />
                </button>
            </div>

            <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            
            {/* Main content area — ml matches sidebar width, shifts when sidebar collapses via CSS on desktop */}
            <main className="lg:ml-[240px] transition-all duration-200">
                {children}
            </main>
        </div>
    );
}

export default AppLayout;
