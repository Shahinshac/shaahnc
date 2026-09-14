import React, { useState, useEffect } from 'react';
import { GitCommit, ArrowUpRight, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SITE_CONFIG } from '../config/siteConfig';
import './GithubActivity.css';

const GithubActivity = () => {
  const [stats, setStats] = useState({
    publicRepos: 17,
    followers: 16,
    loading: true,
    error: false
  });

  const [recentEvents, setRecentEvents] = useState([
    {
      repo: "Shahinshac/HospitalOs",
      type: "PushEvent",
      message: "Updated hospital operations service layer & pharmacy modules",
      time: "Recent"
    },
    {
      repo: "Shahinshac/restaurant-billing",
      type: "PushEvent",
      message: "Refined WebSocket order dispatch and table synchronization",
      time: "Recent"
    },
    {
      repo: "Shahinshac/CBS",
      type: "PushEvent",
      message: "Improved transactional validation for loan EMI calculations",
      time: "Recent"
    }
  ]);

  useEffect(() => {
    // Fetch live user stats safely
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Shahinshac');
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats(prev => ({
            ...prev,
            publicRepos: userData.public_repos ?? 17,
            followers: userData.followers ?? 16,
            loading: false
          }));
        } else {
          setStats(prev => ({ ...prev, loading: false }));
        }

        // Fetch recent events safely
        const eventsRes = await fetch('https://api.github.com/users/Shahinshac/events/public?per_page=5');
        if (eventsRes.ok) {
          const eventsData = await eventsRes.json();
          if (Array.isArray(eventsData) && eventsData.length > 0) {
            const formatted = eventsData.slice(0, 4).map(e => {
              const commitMsg = e.payload?.commits?.[0]?.message || `${e.type.replace('Event', '')} action`;
              return {
                repo: e.repo?.name || 'Shahinshac/repo',
                type: e.type,
                message: commitMsg,
                time: new Date(e.created_at).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric'
                })
              };
            });
            setRecentEvents(formatted);
          }
        }
      } catch {
        // Graceful fallback without throwing or showing error UI
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section className="section github-section" id="activity">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Open Source</span>
          </div>
          <h2 className="section-title">GITHUB ACTIVITY</h2>
          <p className="section-subtitle">
            Continuous development logs, repository tracking, and commit activity
            across full-stack engineering repositories.
          </p>
        </div>

        {/* GitHub Overview Box */}
        <div className="github-overview-grid">
          {/* Left Stats Block */}
          <div className="github-profile-card card-base">
            <div className="gh-card-header">
              <div className="gh-avatar-box">
                <GithubIcon size={24} className="gh-icon" />
              </div>
              <div className="gh-user-info">
                <h3 className="gh-username">Shahinshac</h3>
                <span className="mono gh-handle">github.com/Shahinshac</span>
              </div>
            </div>

            <div className="gh-stats-row">
              <div className="gh-stat-box">
                <span className="gh-stat-value mono">{stats.publicRepos}</span>
                <span className="gh-stat-label">Public Repos</span>
              </div>
              <div className="gh-stat-box">
                <span className="gh-stat-value mono">{stats.followers}</span>
                <span className="gh-stat-label">Followers</span>
              </div>
              <div className="gh-stat-box">
                <span className="gh-stat-value mono">Active</span>
                <span className="gh-stat-label">Commit Cadence</span>
              </div>
            </div>

            <a
              href="https://github.com/Shahinshac"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary gh-visit-btn"
            >
              <GithubIcon size={16} /> View Profile on GitHub <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right Activity Feed */}
          <div className="github-feed-card card-base">
            <div className="feed-header">
              <div className="feed-header-left">
                <Activity size={16} className="feed-icon" />
                <span className="mono feed-title">RECENT CODE PUSHES</span>
              </div>
              <span className="mono feed-live-pill">Live GitHub Feed</span>
            </div>

            <div className="events-timeline">
              {recentEvents.map((evt, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-bullet">
                    <GitCommit size={14} />
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-meta">
                      <a
                        href={`https://github.com/${evt.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-repo mono"
                      >
                        {evt.repo}
                      </a>
                      <span className="timeline-time mono">{evt.time}</span>
                    </div>
                    <p className="timeline-message">{evt.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
