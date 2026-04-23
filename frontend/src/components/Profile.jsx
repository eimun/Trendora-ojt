import { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Bookmark, Mail, Shield, Sparkles } from 'lucide-react';
import { API_URL } from '../config';
import { motion } from 'framer-motion';

function Profile() {
    const [profile, setProfile] = useState({ email: '', created_at: null, saved_count: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => { fetchProfile(); }, []);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get(`${API_URL}/api/auth/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProfile({
                email: res.data.email,
                created_at: res.data.created_at,
                saved_count: res.data.saved_count
            });
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const initials = profile.email ? profile.email.slice(0, 2).toUpperCase() : '??';
    const joinDate = profile.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently';

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
                <div className="max-w-2xl mx-auto space-y-5">
                    <div className="h-52 bg-white dark:bg-gray-800 rounded-3xl animate-pulse" />
                    <div className="h-40 bg-white dark:bg-gray-800 rounded-3xl animate-pulse" />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 md:p-8">
            <div className="max-w-2xl mx-auto space-y-5">

                {/* Hero Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800"
                >
                    {/* Banner */}
                    <div className="h-28 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative">
                        <div className="absolute inset-0 opacity-20 overflow-hidden">
                            <Sparkles size={80} className="absolute -top-4 -right-4 rotate-12 text-white" />
                            <Sparkles size={40} className="absolute top-4 left-16" />
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="px-6 pb-6">
                        <div className="flex items-end justify-between -mt-12 mb-4">
                            <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-900 ring-4 ring-white dark:ring-gray-900 flex items-center justify-center shadow-lg">
                                <span className="text-2xl font-black bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                    {initials}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-xs font-bold border border-purple-100 dark:border-purple-800/40">
                                <Shield size={12} /> Verified Member
                            </div>
                        </div>

                        <h2 className="text-xl font-black text-gray-900 dark:text-white">{profile.email}</h2>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                                <Calendar size={14} /> Joined {joinDate}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                                <Bookmark size={14} /> {profile.saved_count || 0} bookmarks
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                                <Mail size={14} /> {profile.email}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Stat Card */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Saved Trends</p>
                    <p className="text-4xl font-black text-gray-900 dark:text-white">{profile.saved_count || 0}</p>
                    <p className="text-xs text-purple-500 font-bold mt-1">Total bookmarks</p>
                </motion.div>

            </div>
        </div>
    );
}

export default Profile;
