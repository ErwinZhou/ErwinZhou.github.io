/** Original conceptual illustrations, grounded in project write-ups and local
 * 15-640 / 15-641 / 15-642 references. Only authored markup enters these SVGs. */
interface ProjectVisual {
  index: string; category: string; title: string; note: string;
  description: string; svg: string;
}
const text = (x: number, y: number, value: string, cls = 'label') => `<text x="${x}" y="${y}" class="${cls}">${value}</text>`;
const zone = (x: number, y: number, w: number, h: number, label: string) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" class="zone"/><text x="${x + 12}" y="${y + 19}" class="zone-label">${label}</text>`;
const wire = (d: string, tone = 'blue', flow = false, arrow = true) => `<path d="${d}" class="wire ${tone}${flow ? ' flow' : ''}"${arrow ? ' marker-end="url(#__ID__-arrow)"' : ''}/>`;
const box = (x: number, y: number, w: number, h: number, label: string, sub = '', tone = 'blue') => `<g class="${tone}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" class="shape tint"/>${text(x + w / 2, y + h / 2 + (sub ? -2 : 6), label)}${sub ? text(x + w / 2, y + h / 2 + 18, sub, 'small') : ''}</g>`;
const circle = (x: number, y: number, r: number, label: string, tone = 'blue') => `<g class="${tone}"><circle cx="${x}" cy="${y}" r="${r}" class="shape tint"/>${text(x, y + 6, label)}</g>`;
const disk = (x: number, y: number, w: number, h: number, label: string, tone = 'teal') => `<g class="${tone}"><path d="M${x} ${y + 10}v${h - 20}c0 14 ${w} 14 ${w} 0V${y + 10}" class="shape tint"/><ellipse cx="${x + w / 2}" cy="${y + 10}" rx="${w / 2}" ry="10" class="shape tint"/>${wire(`M${x} ${y + h - 22}c0 14 ${w} 14 ${w} 0`, tone, false, false)}${text(x + w / 2, y + h / 2 + 9, label)}</g>`;
const cells = (x: number, y: number, cols: number, rows: number, size = 12, tone = 'blue') => `<g class="${tone}">${Array.from({ length: cols * rows }, (_, i) => `<rect x="${x + (i % cols) * (size + 3)}" y="${y + Math.floor(i / cols) * (size + 3)}" width="${size}" height="${size}" rx="2" class="shape${i % 3 === 0 ? ' tint' : ''}"/>`).join('')}</g>`;
const chip = (x: number, y: number, label: string, tone = 'blue') => `<g class="${tone}">${Array.from({ length: 4 }, (_, i) => wire(`M${x - 6} ${y + 12 + i * 12}h6 M${x + 76} ${y + 12 + i * 12}h6 M${x + 16 + i * 14} ${y - 6}v6 M${x + 16 + i * 14} ${y + 60}v6`, tone, false, false)).join('')}<rect x="${x}" y="${y}" width="76" height="60" rx="7" class="shape tint"/>${text(x + 38, y + 36, label)}</g>`;
const browser = (x: number, y: number, label: string, tone = 'blue') => `<g class="${tone}"><rect x="${x}" y="${y}" width="100" height="70" rx="8" class="shape"/>${wire(`M${x} ${y + 17}h100`, tone, false, false)}${[10, 19, 28].map(dx => `<circle cx="${x + dx}" cy="${y + 8}" r="2" class="solid"/>`).join('')}${text(x + 50, y + 46, label)}</g>`;
const packet = (x: number, y: number, label: string, tone = 'blue') => box(x, y, 36, 30, label, '', tone);
const log = (x: number, y: number, tone = 'blue') => `<g class="${tone}">${[0, 1, 2, 3].map(i => `<rect x="${x + i * 22}" y="${y}" width="18" height="18" rx="2" class="shape${i < 3 ? ' tint' : ''}"/>`).join('')}</g>`;

export const PROJECT_VISUALS: Record<string, ProjectVisual> = {
  'bustub-dbms': {
    index: '01', category: 'DATABASE / C++', title: 'Inside the query engine', note: 'Execution → pages → persistence',
    description: 'SQL passes through an optimizer and executors. A B+ tree branches into leaf pages, which use buffer-pool frames and a disk scheduler to access disk storage.',
    svg: zone(20, 24, 288, 244, 'QUERY PROCESSING') + zone(324, 24, 296, 244, 'STORAGE ENGINE')
      + wire('M136 83H174') + wire('M232 111V153') + wire('M174 182H135')
      + box(44, 58, 92, 52, 'SQL') + box(174, 58, 112, 52, 'Optimizer') + box(174, 154, 112, 58, 'Executors', 'scan / join')
      + circle(94, 182, 29, 'B+') + wire('M78 207L57 232 M94 211V232 M110 207L131 232', 'teal', false, false)
      + [42, 82, 122].map(x => box(x, 232, 24, 17, '', '', 'teal')).join('')
      + wire('M286 183H335V88H350', 'teal', true) + box(350, 64, 154, 48, 'Buffer pool', 'cached frames', 'teal')
      + cells(365, 130, 6, 2, 16, 'teal') + wire('M426 173V201', 'teal', true)
      + box(352, 202, 150, 47, 'Disk scheduler', '', 'violet') + wire('M504 225H535', 'violet', true)
      + disk(536, 180, 62, 73, 'Disk'),
  },
  'suffix-speculative-decoding': {
    index: '02', category: 'ML SYSTEMS / INFERENCE', title: 'Reuse context. Verify together.', note: 'No separate draft model',
    description: 'Repeated context is indexed into a suffix tree. Branching token candidates feed one target-model verification pass with a KV cache. Accepted tokens extend the context and rejected tokens are discarded.',
    svg: zone(20, 25, 278, 244, 'CONTEXT / CANDIDATE PROPOSAL') + zone(316, 25, 304, 244, 'TARGET-MODEL VERIFICATION')
      + [0, 1, 2, 3, 4].map(n => packet(37 + n * 46, 62, ['the', 'cat', 'sat', 'the', 'cat'][n], n > 2 ? 'teal' : 'blue')).join('')
      + wire('M157 93V122', 'teal', true)
      + wire('M155 139L87 178 M155 139L222 178 M87 178L57 223 M87 178L119 223 M222 178L192 223 M222 178L253 223', 'teal', false, false)
      + circle(155, 139, 15, '·', 'teal') + circle(87, 179, 19, 'sat', 'teal') + circle(222, 179, 19, 'ran', 'violet')
      + [57, 119, 192, 253].map((x, i) => circle(x, 224, 15, ['on', 'by', 'to', 'in'][i], i < 2 ? 'teal' : 'violet')).join('')
      + wire('M275 178H339V143H351', 'teal', true) + chip(352, 112, 'LLM', 'violet') + disk(492, 105, 93, 65, 'KV cache', 'violet')
      + wire('M428 142H492', 'violet', false, false) + text(467, 83, 'ONE FORWARD PASS', 'small') + wire('M390 179V209', 'violet')
      + packet(353, 218, 'sat', 'teal') + packet(399, 218, 'on', 'teal') + packet(445, 218, 'a', 'teal') + packet(518, 218, '×', 'warm')
      + wire('M351 250V282H156V250', 'teal', true) + text(467, 199, 'accept prefix / discard rest', 'small'),
  },
  'distributed-scholarly-search': {
    index: '03', category: 'CLOUD / DISTRIBUTED SEARCH', title: 'From abstracts to answers', note: 'Kafka · GCS · Dataproc',
    description: 'A frontend sends search requests to the API. Kafka distributes processing work. Crawled abstracts are stored in GCS and indexed by MapReduce on Dataproc; the API uses existing results when a new MapReduce job is unnecessary.',
    svg: zone(171, 25, 284, 246, 'PROCESSING / GCP') + browser(32, 116, 'Search') + box(192, 57, 110, 55, 'API')
      + wire('M132 151H158V84H192') + box(192, 169, 110, 54, 'Kafka', 'work queue', 'violet') + wire('M247 113V168', 'violet', true)
      + box(332, 58, 101, 54, 'Crawler', '', 'teal') + wire('M302 195H319V85H332', 'violet', true)
      + disk(496, 54, 106, 67, 'GCS', 'teal') + wire('M433 85H496', 'teal', true)
      + box(332, 169, 101, 54, 'MapReduce', 'Dataproc', 'violet') + wire('M547 122V150H382V169', 'teal', true)
      + disk(496, 172, 106, 72, 'Results', 'teal') + wire('M433 195H496', 'teal', true)
      + wire('M546 247V285H159V166H132', 'teal', true) + wire('M304 64H466V195H496', 'warm', true)
      + text(500, 39, 'reuse existing results', 'small'),
  },
  'distributed-training-zero': {
    index: '04', category: 'ML SYSTEMS / COMMUNICATION', title: 'Shard the model. Share the work.', note: 'Tensor parallel × data parallel',
    description: 'Two data-parallel groups each contain two tensor-parallel ranks with sharded weights. Horizontal communication combines tensor outputs. Vertical communication all-gathers parameters and reduce-scatters gradients; each rank holds a local optimizer-state shard.',
    svg: zone(26, 24, 275, 245, 'DATA GROUP 0') + zone(337, 24, 275, 245, 'DATA GROUP 1')
      + [46, 202, 357, 513].map((x, i) => chip(x, 80, `R${i}`, i < 2 ? 'blue' : 'teal')).join('')
      + wire('M130 110H195', 'violet', true) + wire('M441 110H506', 'violet', true)
      + text(164, 159, 'tensor-parallel collectives', 'small') + text(474, 159, 'tensor-parallel collectives', 'small')
      + [49, 205, 360, 516].map((x, i) => cells(x, 187, 4, 2, 13, i < 2 ? 'blue' : 'teal')).join('')
      + [83, 239, 394, 550].map(x => text(x, 244, 'W / ∇ / Adam', 'small')).join('')
      + wire('M84 70V13H395V70', 'teal', true) + wire('M239 145V279H550V146', 'violet', true)
      + text(320, 296, 'all-gather parameters · reduce-scatter gradients', 'small'),
  },
  'blackwell-gemm-kernel': {
    index: '05', category: 'GPU / BLACKWELL SM100', title: 'Keep the tensor cores fed', note: 'Asynchronous load / compute overlap',
    description: 'Matrix tiles A and B move from global memory through TMA into shared-memory pipeline buffers. Tensor cores accumulate into tensor memory, followed by an epilogue. The timeline illustrates overlapping loads and matrix multiplication.',
    svg: zone(22, 22, 126, 174, 'GLOBAL MEMORY') + cells(42, 60, 3, 3, 16, 'blue') + cells(80, 117, 3, 3, 16, 'teal')
      + text(116, 88, 'A', 'small') + text(49, 149, 'B', 'small')
      + wire('M149 105H184', 'blue', true) + box(185, 76, 69, 55, 'TMA')
      + wire('M254 105H280', 'blue', true) + zone(280, 22, 154, 174, 'SHARED MEMORY')
      + box(298, 62, 117, 39, 'Stage 0', '', 'teal') + box(298, 124, 117, 39, 'Stage 1', '', 'violet')
      + wire('M434 105H467', 'teal', true) + chip(468, 75, 'MMA', 'teal') + wire('M508 143V169', 'teal')
      + box(471, 170, 139, 32, 'TMEM → epilogue', '', 'violet')
      + text(63, 236, 'LOAD', 'small') + text(63, 271, 'MMA', 'small')
      + [0, 1, 2].map(i => box(111 + i * 146, 217, 132, 25, `k${i}`, '', 'blue') + box(184 + i * 146, 252, 132, 25, `k${i}`, '', 'teal')).join(''),
  },
  'pytorch-autodiff': {
    index: '06', category: 'ML SYSTEMS / AUTODIFF', title: 'A graph that learns backwards', note: 'Forward values / reverse gradients',
    description: 'Input x and trainable weight W feed a matrix multiplication, bias b feeds addition, and sigmoid produces a prediction. Prediction and target y feed the loss. Reverse-mode gradients follow the graph backwards to update parameters.',
    svg: zone(24, 25, 592, 249, 'REVERSE-MODE COMPUTATION GRAPH')
      + wire('M92 92L194 140 M92 198L194 152 M250 146H302 M329 87V121 M356 146H405 M462 146H517 M549 220V177')
      + circle(67, 81, 26, 'x') + circle(67, 211, 26, 'W', 'teal') + circle(222, 146, 29, '×')
      + circle(329, 65, 23, 'b', 'teal') + circle(329, 146, 27, '+') + circle(433, 146, 28, 'σ', 'violet')
      + circle(549, 146, 30, 'Loss', 'warm') + circle(549, 241, 21, 'y')
      + wire('M520 124Q473 79 447 115 M408 127Q380 96 350 126 M307 168Q272 209 242 171 M197 175Q153 239 96 218', 'warm', true)
      + text(177, 77, 'FORWARD →', 'small') + text(320, 249, '← BACKPROPAGATION / ∂L', 'small'),
  },
  'cmu-dungeon': {
    index: '07', category: 'DISTRIBUTED SYSTEMS / ACTORS', title: 'One world, many replicas', note: 'Nearby reads / eventual consistency',
    description: 'Players connect through RPC to nearby region servers. Each region contains query actors with FIFO mailboxes and local key-value state. Regions periodically synchronize updates using last-writer-wins conflict resolution.',
    svg: wire('M165 177L320 100L480 177 M219 211H420', 'violet', true, false)
      + zone(233, 23, 174, 123, 'FRANKFURT') + zone(44, 149, 174, 122, 'OHIO') + zone(422, 149, 174, 122, 'OSAKA')
      + [[249, 64], [60, 190], [438, 190]].map(([x, y]) => circle(x + 22, y + 12, 18, 'A') + circle(x + 67, y + 12, 18, 'A', 'teal') + disk(x + 103, y - 8, 40, 59, 'KV', 'teal') + log(x + 6, y + 42)).join('')
      + browser(29, 42, 'Player') + browser(510, 42, 'Player') + wire('M129 78H232', 'blue', true) + wire('M560 113V148', 'blue', true)
      + text(320, 183, 'SYNC', 'small') + text(320, 205, 'LWW', 'small') + text(320, 245, 'actor mailboxes', 'small'),
  },
  'cmu-tube': {
    index: '08', category: 'NETWORKING / VIDEO', title: 'Adapt before the buffer runs dry', note: 'DASH / buffer-based bitrate selection',
    description: 'Encoded DASH representations are served over a changing network into a playback buffer. A buffer-based ABR controller observes occupancy and chooses the next segment bitrate. Buffered segments feed video playback.',
    svg: zone(24, 25, 162, 243, 'DASH ORIGIN') + [0, 1, 2].map(i => box(43, 63 + i * 59, 123, 39, ['High', 'Medium', 'Low'][i], '', ['violet', 'blue', 'teal'][i])).join('')
      + wire('M186 144H223', 'blue', true) + wire('M231 146l12 -18 14 30 13 -40 13 26 14 -12 13 14', 'blue', false, false)
      + text(269, 196, 'network', 'small') + wire('M312 144H344', 'blue', true)
      + zone(344, 25, 271, 243, 'PLAYER / DASH.JS') + box(361, 62, 152, 47, 'ABR controller', '', 'violet')
      + wire('M438 110V142', 'violet') + [0, 1, 2, 3].map(i => box(361 + i * 37, 147, 29, 44, '', '', i < 3 ? 'teal' : 'blue')).join('')
      + text(434, 221, 'playback buffer', 'small') + wire('M510 167H540', 'teal')
      + '<g class="teal"><rect x="542" y="138" width="54" height="57" rx="8" class="shape tint"/><path d="M559 152l20 15 -20 15Z" class="solid"/></g>'
      + wire('M361 176H333V84H360', 'violet', true) + wire('M361 65H208V13H105V62', 'violet', true)
      + text(269, 51, 'next segment / bitrate', 'small'),
  },
  'tcp-in-the-wild': {
    index: '09', category: 'NETWORKING / TRANSPORT', title: 'Reliability over an unreliable link', note: 'Reno · windows · RTT · retransmission',
    description: 'Sender application data enters a sliding send window controlled by congestion and flow limits. Numbered packets cross a lossy UDP path to a receiver reorder buffer. ACKs return to the sender and drive retransmission and RTT estimation.',
    svg: zone(24, 25, 196, 244, 'SENDER') + zone(420, 25, 196, 244, 'RECEIVER')
      + box(47, 57, 150, 43, 'Application') + box(443, 57, 150, 43, 'Application')
      + wire('M122 101V131') + wire('M518 131V102', 'teal')
      + [0, 1, 2, 3].map(i => packet(42 + i * 43, 133, `${i + 1}`) + packet(437 + i * 43, 133, `${i + 1}`, i === 1 ? 'warm' : 'teal')).join('')
      + wire('M215 148H423', 'blue', true) + packet(257, 132, '1') + packet(348, 132, '3', 'teal')
      + text(320, 152, '×', 'symbol warm') + text(320, 119, 'UDP / loss', 'small')
      + box(47, 192, 150, 52, 'cwnd / rwnd', 'Reno + RTT', 'violet') + box(443, 192, 150, 52, 'Reorder', 'in-order delivery', 'teal')
      + wire('M442 216H198', 'teal', true) + text(320, 205, 'ACK / retransmit', 'small'),
  },
  'raft-consensus': {
    index: '10', category: 'DISTRIBUTED SYSTEMS / CONSENSUS', title: 'One leader. A replicated log.', note: 'Election / replication / commit',
    description: 'A client sends commands to an elected leader. The leader replicates log entries to followers using AppendEntries RPCs. Matching logs acknowledge replication; a majority allows safe commit and state-machine application.',
    svg: browser(25, 113, 'Client') + wire('M126 149H195', 'blue', true)
      + zone(195, 60, 152, 178, 'ELECTED LEADER') + chip(233, 94, 'L', 'teal') + log(228, 180, 'teal')
      + wire('M349 126L467 69 M349 151H467 M349 179L467 237', 'blue', true)
      + [[37, 'F1'], [122, 'F2'], [207, 'F3']].map(([y, label]) => box(469, Number(y), 138, 49, String(label)) + log(494, Number(y) + 55)).join('')
      + wire('M465 92L349 141', 'teal', true) + text(404, 40, 'AppendEntries', 'small')
      + text(270, 218, 'majority → commit', 'small') + text(400, 295, 'matching logs / safe application', 'small'),
  },
  'mixnet': {
    index: '11', category: 'NETWORKING / PRIVACY', title: 'Hide the path as well as the payload', note: 'Control plane / source-routed data plane',
    description: 'STP, safe flooding, link-state advertisements, and Dijkstra construct routing information in the control plane. In the data plane, source-routed traffic traverses relay nodes and a mixing buffer before reaching its destination.',
    svg: zone(24, 25, 592, 92, 'CONTROL PLANE') + box(43, 60, 109, 38, 'STP', '', 'violet') + box(183, 60, 109, 38, 'Flood', '', 'violet')
      + box(324, 60, 109, 38, 'LSA', '', 'violet') + box(465, 60, 130, 38, 'Dijkstra', '', 'violet')
      + wire('M153 79H183 M293 79H324 M434 79H464', 'violet') + wire('M529 118V136H95V188', 'violet', true)
      + zone(24, 153, 592, 133, 'DATA PLANE') + circle(93, 220, 28, 'Src') + circle(224, 220, 26, 'R1', 'teal')
      + circle(416, 220, 26, 'R2', 'teal') + circle(552, 220, 28, 'Dst')
      + wire('M122 220H196 M251 220H287 M354 220H389 M443 220H523', 'teal', true)
      + box(285, 190, 70, 59, 'Mix', '', 'warm') + cells(296, 253, 4, 1, 9, 'warm')
      + wire('M224 193Q320 119 417 192', 'blue', false, false) + text(319, 179, 'overlay routes', 'small'),
  },
  'distributed-bitcoin-miner': {
    index: '12', category: 'DISTRIBUTED SYSTEMS / SCHEDULING', title: 'Split work. Recover failed chunks.', note: 'Fault-tolerant mining over LSP',
    description: 'A mining client submits a nonce range to a scheduler. The scheduler splits and distributes chunks to three workers, collects hashes, and reassigns unfinished chunks after a worker fails. All messages use a reliable LSP layer over UDP.',
    svg: browser(24, 110, 'Client') + wire('M125 145H199', 'blue', true) + box(200, 109, 164, 73, 'Scheduler', 'split / reassign', 'violet')
      + [0, 1, 2].map(i => chip(515, 29 + i * 79, `W${i + 1}`, i === 2 ? 'warm' : 'teal')).join('')
      + wire('M365 129H419V59H508 M365 145H508 M365 161H419V218H508', 'teal', true)
      + [0, 1, 2].map(i => packet(438, 43 + i * 79, `${i * 3}…`, i === 2 ? 'warm' : 'teal')).join('')
      + wire('M514 230Q456 267 438 166', 'warm', true) + text(399, 245, 'retry', 'small')
      + zone(24, 260, 592, 36, '') + text(320, 283, 'LSP OVER UDP · WINDOW / ACK / EPOCH / BACKOFF', 'small'),
  },
  'personal-portfolio': {
    index: '13', category: 'WEB / STATIC + WEBASSEMBLY', title: 'Content, photos, and playable code', note: 'Build once / serve static assets',
    description: 'MDX content, photos, and C++ game sources follow separate build paths: Astro builds pages, image optimization creates WebP thumbnails, and Emscripten compiles games to WebAssembly. GitHub Pages serves the resulting artifacts to the browser.',
    svg: zone(24, 24, 156, 247, 'SOURCE') + zone(201, 24, 191, 247, 'BUILD')
      + box(42, 60, 120, 47, 'MDX', 'projects / blog') + box(42, 134, 120, 47, 'Photos', '', 'teal') + box(42, 208, 120, 47, 'C++ games', '', 'violet')
      + wire('M162 84H220') + wire('M162 158H220', 'teal') + wire('M162 232H220', 'violet')
      + box(219, 60, 155, 47, 'Astro', 'static HTML') + box(219, 134, 155, 47, 'WebP', 'responsive images', 'teal')
      + box(219, 208, 155, 47, 'Emscripten', 'WASM', 'violet')
      + wire('M374 84H420V69H448 M374 158H420V69 M374 232H420V157', 'blue', true)
      + browser(469, 122, 'Browser') + box(448, 49, 142, 43, 'GitHub Pages', '', 'teal')
      + wire('M519 92V121', 'teal', true) + text(520, 231, 'read / browse / play', 'small'),
  },
};
