import React, { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { SITE_DATA, PortfolioProject, VideoItem } from '../../data/siteData';

interface PortfolioSectionProps {
  onOpenVideo: (youtubeId: string, title: string) => void;
  onOpenContact: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenVideo, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile' | 'reels'>('all');
  const { projects, reels } = SITE_DATA.portfolio;

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') return p.category === 'Web Design' || p.category === 'Dashboard' || p.category === 'Restaurant';
    if (activeTab === 'mobile') return p.category === 'Mobile Apps' || p.category === 'SaaS';
    return true;
  });

  return (
    <section 
      id="portfolio" 
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-pulse" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Latest Projects <span className="text-gradient-blue">We've Shipped</span>
          </h2>
          <p className="section-desc">
            Explore our curated showcase of digital platforms, bespoke software architectures, and high-impact marketing reels built for scale.
          </p>

          {/* Filter Tabs */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px',
              borderRadius: '9999px',
              background: '#F8FAFC',
              border: '1px solid var(--border-subtle)',
              marginTop: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)'
            }}
          >
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: activeTab === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
                background: activeTab === 'all' ? 'var(--accent-blue)' : 'transparent',
                boxShadow: activeTab === 'all' ? '0 4px 14px rgba(29, 78, 216, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              All Case Studies
            </button>
            <button
              onClick={() => setActiveTab('web')}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: activeTab === 'web' ? '#FFFFFF' : 'var(--text-secondary)',
                background: activeTab === 'web' ? 'var(--accent-blue)' : 'transparent',
                boxShadow: activeTab === 'web' ? '0 4px 14px rgba(29, 78, 216, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Web & Portals
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: activeTab === 'mobile' ? '#FFFFFF' : 'var(--text-secondary)',
                background: activeTab === 'mobile' ? 'var(--accent-blue)' : 'transparent',
                boxShadow: activeTab === 'mobile' ? '0 4px 14px rgba(29, 78, 216, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Mobile & SaaS
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: activeTab === 'reels' ? '#FFFFFF' : 'var(--text-secondary)',
                background: activeTab === 'reels' ? 'linear-gradient(135deg, #0284C7, #0D9488)' : 'transparent',
                boxShadow: activeTab === 'reels' ? '0 4px 14px rgba(2, 132, 199, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Campaign Reels
            </button>
          </div>
        </div>

        {/* Content View: Projects Grid */}
        {activeTab !== 'reels' ? (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px'
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenContact={onOpenContact} />
            ))}
          </div>
        ) : (
          /* Reels / Video Showcase Grid */
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {reels.map((reel) => (
              <ReelCard 
                key={reel.id} 
                reel={reel} 
                onPlay={() => onOpenVideo(reel.youtubeId, reel.title)} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Project Card with Image Preview & Details (Light Mode)
const ProjectCard: React.FC<{ project: PortfolioProject; onOpenContact: () => void }> = ({ project, onOpenContact }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-panel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        background: '#FFFFFF'
      }}
      onClick={onOpenContact}
    >
      {/* Visual Preview */}
      <div 
        style={{
          width: '100%',
          height: '240px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#F1F5F9'
        }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }} 
          loading="lazy"
        />
        <span 
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '6px 12px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(203, 213, 225, 0.8)',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--accent-blue)',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)'
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Description & Tags */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
            {project.description}
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: '#F1F5F9',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  color: 'var(--text-secondary)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-blue)' }}>
              Discuss Similar Build
            </span>
            <ArrowUpRight size={16} color="var(--accent-blue)" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reel Card with Play Overlay (Light Mode)
const ReelCard: React.FC<{ reel: VideoItem; onPlay: () => void }> = ({ reel, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg`;

  return (
    <div 
      className="glass-panel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
      style={{
        padding: '16px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        background: '#FFFFFF'
      }}
    >
      <div 
        style={{
          width: '100%',
          height: '220px',
          borderRadius: '14px',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#F1F5F9'
        }}
      >
        <img 
          src={thumbUrl} 
          alt={reel.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
          }}
          loading="lazy"
        />
        {/* Play Button Icon */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1D4ED8, #0284C7)',
              boxShadow: '0 4px 20px rgba(29, 78, 216, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transform: isHovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}
          >
            <Play size={22} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
          </div>
        </div>

        <span 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            padding: '3px 8px',
            borderRadius: '4px',
            background: 'rgba(15, 23, 42, 0.85)',
            fontSize: '11px',
            color: '#FFFFFF',
            fontWeight: 600
          }}
        >
          {reel.duration}
        </span>
      </div>

      <div>
        <span style={{ fontSize: '12px', color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase' }}>
          {reel.category}
        </span>
        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
          {reel.title}
        </h4>
      </div>
    </div>
  );
};
