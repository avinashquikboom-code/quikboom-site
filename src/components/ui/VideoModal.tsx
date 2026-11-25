import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  youtubeId: string | null;
  title: string | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ youtubeId, title, onClose }) => {
  if (!youtubeId) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video Player'}
    >
      <div 
        className="video-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          style={{
            padding: '14px 20px',
            background: '#0B111B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#F5F8FF' }}>
            {title || 'QuikBoom Reel'}
          </span>
          <button 
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(148, 180, 220, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
            aria-label="Close video"
          >
            <X size={16} />
          </button>
        </div>

        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title || 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
