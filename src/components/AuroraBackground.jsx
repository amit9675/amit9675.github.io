import './AuroraBackground.css';

/*
 * Fixed, full-viewport ambient background:
 * soft aurora blobs + a faint perspective grid.
 * Pure CSS — zero JS cost.
 */
const AuroraBackground = () => (
  <div className="aurora-bg" aria-hidden="true">
    <div className="aurora-blob aurora-blob--cyan" />
    <div className="aurora-blob aurora-blob--violet" />
    <div className="aurora-blob aurora-blob--pink" />
    <div className="aurora-grid" />
    <div className="aurora-noise" />
  </div>
);

export default AuroraBackground;
