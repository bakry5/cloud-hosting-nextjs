"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/ButtonSpinner';

interface UserProfile {
  id: number;
  username: string;
  email: string;
  admin: boolean;
  createdAt: string;
}

const ProfilePage = () => {
  const router = useRouter();
  
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${DOMAIN}/api/auth/me`);
      setUser(response.data);
      setFormData({
        username: response.data.username,
        email: response.data.email,
        password: ''
      });
    } catch (error: any) {
      toast.error(error?.response?.data.message || 'Failed to fetch profile');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username.trim()) {
      return toast.error('Username is required');
    }
    if (!formData.email.trim()) {
      return toast.error('Email is required');
    }
    if (formData.password && formData.password.length < 6) {
      return toast.error('Password must be at least 6 characters');
    }

    try {
      setSaving(true);
      const updateData: any = {
        username: formData.username,
        email: formData.email
      };
      
      if (formData.password) {
        updateData.password = formData.password;
      }

      await axios.put(`${DOMAIN}/api/users/profile/${user?.id}`, updateData);
      toast.success('Profile updated successfully');
      setEditing(false);
      setFormData({ ...formData, password: '' });
      fetchProfile();
    } catch (error: any) {
      toast.error(error?.response?.data.message || 'Failed to update profile');
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProfile = async () => {
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    try {
      setDeleting(true);
      await axios.delete(`${DOMAIN}/api/users/profile/${user?.id}`);
      toast.success('Account deleted successfully');
      router.push('/');
      router.refresh();
    } catch (error: any) {
      toast.error(error?.response?.data.message || 'Failed to delete account');
      console.log(error);
      setDeleting(false);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      password: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-brand border-t-transparent mx-auto"></div>
          <p className="mt-4 text-lg text-slate-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-slate-600">Failed to load profile</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 px-6 py-3 bg-brand text-white rounded-xl hover:bg-brand-dark transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-accent mb-2">
            Your Profile
          </h1>
          <p className="text-slate-600 text-lg">Manage your account settings and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl mb-6">
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                {user.username.charAt(0).toUpperCase()}
              </div>
              {user.admin && (
                <div className="absolute -bottom-2 -right-2 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  ADMIN
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{user.username}</h2>
              <p className="text-slate-600 mb-2">{user.email}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Member since {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 rounded-2xl p-5 border border-brand/20 hover:border-brand/40 transition-all hover:scale-105">
              <div className="text-2xl font-bold text-brand mb-1">User</div>
              <div className="text-sm text-slate-600">Account Type</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-105">
              <div className="text-2xl font-bold text-emerald-600 mb-1">Active</div>
              <div className="text-sm text-slate-600">Status</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-105">
              <div className="text-2xl font-bold text-amber-600 mb-1">{Math.floor((Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24))}</div>
              <div className="text-sm text-slate-600">Days Active</div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Account Settings</h3>
              {!editing && (
                <button
                  onClick={() => setEditing(true)}
                  className="px-6 py-2 bg-brand text-white rounded-xl hover:bg-brand-dark transition-all font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Profile
                </button>
              )}
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!editing}
                  className="w-full px-5 py-4 border border-slate-200 rounded-xl text-lg bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!editing}
                  className="w-full px-5 py-4 border border-slate-200 rounded-xl text-lg bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Enter your email"
                />
              </div>

              {editing && (
                <div className="animate-fade-in-up">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    New Password (optional)
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl text-lg bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-300"
                    placeholder="Leave blank to keep current password"
                  />
                  <p className="text-xs text-slate-500 mt-2">Minimum 6 characters</p>
                </div>
              )}

              {editing && (
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 text-white bg-gradient-to-r from-brand to-brand-accent hover:from-brand-dark hover:to-brand-accent px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {saving ? (
                      <ButtonSpinner />
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Save Changes
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    disabled={saving}
                    className="px-8 py-4 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="glass rounded-3xl p-8 shadow-2xl border-2 border-red-200/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-1 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Danger Zone
              </h3>
              <p className="text-slate-600 text-sm">
                Once you delete your account, there is no going back. Please be certain.
              </p>
            </div>
            <button
              onClick={handleDeleteProfile}
              disabled={deleting}
              className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-semibold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
            >
              {deleting ? (
                <ButtonSpinner />
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Account
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => router.push('/')}
            className="glass rounded-2xl p-6 text-left hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-brand transition-colors">Go to Homepage</h4>
                <p className="text-sm text-slate-600">Explore our hosting plans</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => router.push('/articles')}
            className="glass rounded-2xl p-6 text-left hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Read Articles</h4>
                <p className="text-sm text-slate-600">Browse our latest blog posts</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
