// Institutional asteroid monitoring data from collaborative international sources
const asteroidData = {
  "live_asteroids": [
    {
      "id": "99942",
      "name": "99942 Apophis",
      "nickname": "Subject of intensive study",
      "diameter_m": 340,
      "velocity_kms": 7.42,
      "next_approach": "2029-04-13",
      "miss_distance_km": 31000,
      "threat_level": "HIGH",
      "torino_scale": 0,
      "last_observed": "2024-10-01",
      "discovery_year": 2004,
      "impact_probability": "Current models indicate < 1 in 100,000",
      "monitoring_priority": "Enhanced continuous tracking",
      "confidence_level": "High - based on extensive 20-year observation record"
    },
    {
      "id": "2022_AP7",
      "name": "2022 AP7", 
      "nickname": "Large asteroid warranting attention",
      "diameter_m": 1500,
      "velocity_kms": 23.4,
      "next_approach": "2025-01-15",
      "miss_distance_km": 4500000,
      "threat_level": "MODERATE",
      "torino_scale": 0,
      "last_observed": "2024-09-28",
      "discovery_year": 2022,
      "impact_probability": "Assessment suggests effectively zero risk for next century",
      "monitoring_priority": "Regular observation protocol",
      "confidence_level": "Moderate - limited by observation arc duration"
    },
    {
      "id": "2023_DW",
      "name": "2023 DW",
      "nickname": "Recently discovered object",
      "diameter_m": 50,
      "velocity_kms": 18.2,
      "next_approach": "2046-02-14",
      "miss_distance_km": 1800000,
      "threat_level": "LOW",
      "torino_scale": 1,
      "last_observed": "2024-10-03",
      "discovery_year": 2023,
      "impact_probability": "Preliminary analysis indicates minimal concern",
      "monitoring_priority": "Standard observation schedule",
      "confidence_level": "Improving with continued observations"
    }
  ],
  "impact_scenarios": [
    {
      "name": "Regional Airburst Analysis",
      "description": "Assessment of atmospheric disruption events based on Chelyabinsk observations",
      "diameter_m": 20,
      "historical_example": "Chelyabinsk meteor event provided valuable data",
      "frequency": "Statistical models suggest occurrence every 10-30 years globally",
      "energy_megatons": 0.5,
      "crater_diameter_m": 0,
      "airburst_altitude_km": 23,
      "casualties_typical": "Regional analysis indicates potential for widespread minor injuries",
      "economic_damage_millions": 33,
      "assessment_confidence": "High - based on recent observational data"
    },
    {
      "name": "Forest Impact Scenario", 
      "description": "Analysis based on Tunguska event characteristics and modern understanding",
      "diameter_m": 50,
      "historical_example": "Tunguska event of 1908 serves as reference case",
      "frequency": "Current estimates suggest 200-300 year intervals globally",
      "energy_megatons": 15,
      "crater_diameter_m": 0,
      "airburst_altitude_km": 8,
      "casualties_typical": "Population impact would vary significantly by location",
      "economic_damage_millions": 50000,
      "assessment_confidence": "Moderate - based on historical analysis and modeling"
    },
    {
      "name": "Surface Impact Assessment",
      "description": "Preliminary analysis of direct surface impact scenarios",
      "diameter_m": 300,
      "historical_example": "No recent analogues - based on geological evidence",
      "frequency": "Geological record suggests very infrequent occurrence",
      "energy_megatons": 2000,
      "crater_diameter_m": 5000,
      "airburst_altitude_km": 0,
      "casualties_typical": "Regional consequences would depend heavily on impact location",
      "economic_damage_millions": 2000000,
      "assessment_confidence": "Low - significant modeling uncertainties remain"
    }
  ],
  "deflection_methods": [
    {
      "name": "Kinetic Impactor Technology",
      "status": "DEMONSTRATED CAPABILITY",
      "description": "NASA's DART mission has validated this approach through successful deflection of Dimorphos",
      "success_example": "DART mission (2022) demonstrated measurable orbital modification",
      "best_for": "Our analysis suggests optimal application to 50-500m objects with multi-year warning periods",
      "effectiveness_rating": 7,
      "cost_billions": 0.3,
      "mission_duration_years": 2,
      "technology_readiness": 9,
      "development_status": "Demonstrated through international collaboration",
      "lead_agencies": "NASA, ESA, JAXA partnership",
      "current_assessment": "Represents the most mature deflection capability currently available to the international community",
      "pros": ["Proven successful in operational conditions", "Relatively modest resource requirements", "No nuclear materials or policy complications"],
      "cons": ["Effectiveness limitations for very large objects", "Requires precise trajectory calculations", "Success depends on adequate warning time"],
      "ongoing_research": "Teams continue investigating enhanced impactor designs and multi-spacecraft coordination approaches"
    },
    {
      "name": "Nuclear Standoff Deflection",
      "status": "UNDER RESEARCH",
      "description": "Theoretical approach involving nuclear devices to alter asteroid trajectories through surface vaporization",
      "success_example": "Extensive computational modeling and nuclear test data analysis",
      "best_for": "Models indicate potential effectiveness against large objects with limited warning time",
      "effectiveness_rating": 10,
      "cost_billions": 1.5,
      "mission_duration_years": 1,
      "technology_readiness": 6,
      "development_status": "Significant technical and policy challenges remain",
      "lead_agencies": "Various national programs with international working group coordination",
      "current_assessment": "While simulations suggest considerable deflection potential, implementation faces substantial barriers",
      "pros": ["Potentially high effectiveness for large threats", "Rapid deployment theoretically possible", "Could address short-warning scenarios"],
      "cons": ["Complex international legal and policy framework required", "Risk of unintended fragmentation", "Significant technological development needed"],
      "ongoing_research": "International working groups continue developing both technical approaches and governance frameworks"
    },
    {
      "name": "Gravity Tractor Concept",
      "status": "THEORETICAL APPROACH",
      "description": "Proposed method using spacecraft gravitational influence for precise trajectory modification",
      "success_example": "Physics thoroughly validated - operational demonstration pending",
      "best_for": "Analysis indicates suitability for smaller objects with extended timeline availability",
      "effectiveness_rating": 4,
      "cost_billions": 2.0,
      "mission_duration_years": 20,
      "technology_readiness": 4,
      "development_status": "Conceptual with significant development requirements",
      "lead_agencies": "International research collaborations examining feasibility",
      "current_assessment": "While technically sound, practical implementation faces considerable time and resource challenges",
      "pros": ["Extremely precise trajectory control possible", "No fragmentation risk", "Gradual, controllable deflection process"],
      "cons": ["Requires decades-long commitment", "Limited to smaller objects", "Substantial resource investment needed"],
      "ongoing_research": "Research teams investigating advanced propulsion and extended mission architectures"
    }
  ],
  "global_stats": {
    "total_neos_cataloged": 2347,
    "potentially_hazardous": 156,
    "last_update": "2024-10-04 09:30 UTC",
    "discovery_rate_monthly": 12,
    "next_significant_approach": "99942 Apophis - April 13, 2029",
    "data_sources": "NASA Planetary Defense, ESA SSA, Minor Planet Center collaborative network",
    "confidence_note": "Assessment confidence varies based on observation quality and duration"
  }
};

// Global state
let currentImpactLocation = null;
let currentSection = 'dashboard';
let filteredThreats = asteroidData.live_asteroids;
let energyChart = null;
let effectivenessChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeDashboard();
  initializeThreatsTracker();
  initializeImpactCalculator();
  initializeDeflectionStrategies();
  initializeRiskMap();
  initializeTooltips();
  updateLiveData();
  
  // Update live data every 30 seconds
  setInterval(updateLiveData, 30000);
});

// Navigation functionality
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSection = item.dataset.section;
      showSection(targetSection);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionName;
    
    // Initialize section-specific content
    switch(sectionName) {
      case 'dashboard':
        initializeDashboard();
        break;
      case 'calculator':
        initializeImpactCalculator();
        break;
      case 'deflection':
        initializeDeflectionStrategies();
        break;
    }
  }
}

// Dashboard functionality
function initializeDashboard() {
  renderPriorityThreats();
  createEnergyComparisonChart();
  updateDashboardStats();
}

function updateDashboardStats() {
  const stats = asteroidData.global_stats;
  document.getElementById('lastUpdate').textContent = stats.last_update;
}

function renderPriorityThreats() {
  const container = document.getElementById('priorityThreats');
  if (!container) return;
  
  const priorityThreats = asteroidData.live_asteroids
    .filter(asteroid => asteroid.threat_level === 'HIGH' || asteroid.threat_level === 'MODERATE')
    .sort((a, b) => {
      const threatOrder = { 'HIGH': 3, 'MODERATE': 2, 'LOW': 1 };
      return threatOrder[b.threat_level] - threatOrder[a.threat_level];
    });

  container.innerHTML = priorityThreats.map(threat => `
    <div class="threat-item ${threat.threat_level.toLowerCase()}" onclick="viewThreatDetails('${threat.id}')">
      <div class="threat-name">${threat.name}</div>
      <div class="threat-nickname">${threat.nickname}</div>
      <div class="threat-details">
        Estimated diameter: ${threat.diameter_m}m (±15m) • Approach velocity: ${threat.velocity_kms} km/s<br>
        Scheduled approach: ${formatDate(threat.next_approach)} • Projected miss distance: ${formatDistance(threat.miss_distance_km)}<br>
        <em>${threat.confidence_level}</em>
      </div>
      <div class="threat-status status--${threat.threat_level === 'HIGH' ? 'warning' : 'info'}">
        ${threat.monitoring_priority} • ${threat.impact_probability}
      </div>
    </div>
  `).join('');
}

function createEnergyComparisonChart() {
  const ctx = document.getElementById('energyComparisonChart');
  if (!ctx) return;

  const scenarios = asteroidData.impact_scenarios;
  
  if (energyChart) {
    energyChart.destroy();
  }

  energyChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: scenarios.map(s => s.name.split(' ')[0] + '\n' + s.name.split(' ')[1]), // Split names
      datasets: [{
        label: 'Estimated Energy Release (Megatons TNT)',
        data: scenarios.map(s => s.energy_megatons),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderColor: ['#217a85', '#cc9b6b', '#8f3530'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: getComputedStyle(document.body).getPropertyValue('--color-text').trim()
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const scenario = scenarios[context.dataIndex];
              return [
                `Energy: ${scenario.energy_megatons} Megatons TNT`,
                `Frequency: ${scenario.frequency}`,
                `Confidence: ${scenario.assessment_confidence}`
              ];
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          type: 'logarithmic',
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--color-text-secondary').trim()
          },
          grid: {
            color: getComputedStyle(document.body).getPropertyValue('--color-border').trim()
          }
        },
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--color-text-secondary').trim()
          },
          grid: {
            color: getComputedStyle(document.body).getPropertyValue('--color-border').trim()
          }
        }
      }
    }
  });
}

// Threats tracker functionality
function initializeThreatsTracker() {
  const searchInput = document.getElementById('searchInput');
  const threatLevelFilter = document.getElementById('threatLevelFilter');
  const sizeFilter = document.getElementById('sizeFilter');
  
  if (searchInput) searchInput.addEventListener('input', filterThreats);
  if (threatLevelFilter) threatLevelFilter.addEventListener('change', filterThreats);
  if (sizeFilter) sizeFilter.addEventListener('change', filterThreats);
  
  renderThreatsGrid();
}

function filterThreats() {
  const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const threatLevel = document.getElementById('threatLevelFilter')?.value || 'all';
  const sizeFilter = document.getElementById('sizeFilter')?.value || 'all';
  
  filteredThreats = asteroidData.live_asteroids.filter(asteroid => {
    const matchesSearch = asteroid.name.toLowerCase().includes(searchTerm) || 
                         asteroid.nickname.toLowerCase().includes(searchTerm);
    
    const matchesThreatLevel = threatLevel === 'all' || asteroid.threat_level === threatLevel;
    
    let matchesSize = true;
    if (sizeFilter === 'small') matchesSize = asteroid.diameter_m < 100;
    else if (sizeFilter === 'medium') matchesSize = asteroid.diameter_m >= 100 && asteroid.diameter_m <= 1000;
    else if (sizeFilter === 'large') matchesSize = asteroid.diameter_m > 1000;
    
    return matchesSearch && matchesThreatLevel && matchesSize;
  });
  
  renderThreatsGrid();
}

function renderThreatsGrid() {
  const grid = document.getElementById('threatsGrid');
  if (!grid) return;
  
  grid.innerHTML = filteredThreats.map(threat => `
    <div class="threat-card ${threat.threat_level.toLowerCase()}" onclick="viewThreatDetails('${threat.id}')">
      <div class="threat-name">${threat.name}</div>
      <div class="threat-nickname">${threat.nickname}</div>
      <div class="threat-details">
        <strong>Estimated Size:</strong> ${threat.diameter_m}m diameter (${getSizeDescription(threat.diameter_m)})<br>
        <strong>Approach Velocity:</strong> ${threat.velocity_kms} km/s<br>
        <strong>Next Close Approach:</strong> ${formatDate(threat.next_approach)}<br>
        <strong>Projected Miss Distance:</strong> ${formatDistance(threat.miss_distance_km)}<br>
        <strong>Impact Assessment:</strong> ${threat.impact_probability}<br>
        <strong>Last Observation:</strong> ${formatDate(threat.last_observed)}<br>
        <strong>Assessment Confidence:</strong> ${threat.confidence_level}
      </div>
      <div class="threat-status status--${getThreatStatusClass(threat.threat_level)}">
        ${threat.monitoring_priority} • Torino Scale: ${threat.torino_scale}
      </div>
    </div>
  `).join('');
}

function viewThreatDetails(threatId) {
  const threat = asteroidData.live_asteroids.find(t => t.id === threatId);
  if (!threat) return;
  
  // Switch to calculator and load this threat
  showSection('calculator');
  loadThreatIntoCalculator(threat);
}

// Impact calculator functionality
function initializeImpactCalculator() {
  const asteroidSelect = document.getElementById('asteroidSelect');
  const diameterSlider = document.getElementById('diameterSlider');
  const velocitySlider = document.getElementById('velocitySlider');
  const calculateButton = document.getElementById('calculateImpact');
  const worldMap = document.querySelector('.impact-map');
  
  // Populate asteroid dropdown
  if (asteroidSelect) {
    asteroidSelect.innerHTML = '<option value="custom">Custom Parameters</option>' +
      asteroidData.live_asteroids.map(asteroid => 
        `<option value="${asteroid.id}">${asteroid.name} - ${asteroid.nickname}</option>`
      ).join('');
    
    asteroidSelect.addEventListener('change', handleAsteroidSelection);
  }
  
  // Event listeners
  if (diameterSlider) {
    diameterSlider.addEventListener('input', updateDiameterDisplay);
    updateDiameterDisplay(); // Initial update
  }
  if (velocitySlider) {
    velocitySlider.addEventListener('input', updateVelocityDisplay);
    updateVelocityDisplay(); // Initial update
  }
  if (calculateButton) {
    calculateButton.addEventListener('click', calculateImpactEffects);
  }
  if (worldMap) {
    worldMap.addEventListener('click', handleMapClick);
  }
}

function handleAsteroidSelection() {
  const select = document.getElementById('asteroidSelect');
  if (!select) return;
  
  const selectedId = select.value;
  
  if (selectedId === 'custom') return;
  
  const asteroid = asteroidData.live_asteroids.find(a => a.id === selectedId);
  if (asteroid) {
    loadThreatIntoCalculator(asteroid);
  }
}

function loadThreatIntoCalculator(threat) {
  const diameterSlider = document.getElementById('diameterSlider');
  const velocitySlider = document.getElementById('velocitySlider');
  
  if (diameterSlider) {
    diameterSlider.value = threat.diameter_m;
    updateDiameterDisplay();
  }
  if (velocitySlider) {
    velocitySlider.value = threat.velocity_kms;
    updateVelocityDisplay();
  }
}

function updateDiameterDisplay() {
  const slider = document.getElementById('diameterSlider');
  const valueSpan = document.getElementById('diameterValue');
  const contextDiv = document.getElementById('sizeContext');
  
  if (!slider || !valueSpan) return;
  
  const diameter = parseInt(slider.value);
  valueSpan.textContent = diameter;
  
  if (contextDiv) {
    contextDiv.textContent = 'Subject to observational uncertainty - ' + getSizeDescription(diameter);
  }
}

function updateVelocityDisplay() {
  const slider = document.getElementById('velocitySlider');
  const valueSpan = document.getElementById('velocityValue');
  
  if (!slider || !valueSpan) return;
  
  const velocity = parseFloat(slider.value);
  valueSpan.textContent = velocity.toFixed(1);
}

function handleMapClick(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Convert to map coordinates
  const longitude = (x / rect.width) * 360 - 180;
  const latitude = 90 - (y / rect.height) * 180;
  
  currentImpactLocation = { lat: latitude, lon: longitude };
  
  // Update visual
  const impactPoint = document.getElementById('impactPoint');
  if (impactPoint) {
    impactPoint.setAttribute('cx', x * (800 / rect.width));
    impactPoint.setAttribute('cy', y * (400 / rect.height));
    impactPoint.setAttribute('r', 8);
    impactPoint.style.opacity = '1';
  }
  
  // Update display
  const locationDisplay = document.getElementById('locationDisplay');
  if (locationDisplay) {
    const locationName = getLocationName(latitude, longitude);
    locationDisplay.innerHTML = `
      Selected region: <strong>${locationName}</strong><br>
      <span class="coordinates">Coordinates: ${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°</span>
    `;
  }
}

function calculateImpactEffects() {
  if (!currentImpactLocation) {
    alert('Please select an impact location on the regional map to proceed with the assessment.');
    return;
  }
  
  // Show loading
  showLoading();
  
  setTimeout(() => {
    const diameterSlider = document.getElementById('diameterSlider');
    const velocitySlider = document.getElementById('velocitySlider');
    
    if (!diameterSlider || !velocitySlider) return;
    
    const diameter = parseFloat(diameterSlider.value);
    const velocity = parseFloat(velocitySlider.value);
    
    // Physics calculations using established models
    const results = calculateImpactPhysics(diameter, velocity, currentImpactLocation);
    
    // Display results
    displayImpactResults(results);
    updateImpactVisualization(results);
    
    hideLoading();
  }, 1500);
}

function calculateImpactPhysics(diameter, velocity, location) {
  // Physical constants and assumptions
  const density = 3000; // kg/m³ (typical stony asteroid density)
  const tntEnergyPerKg = 4.184e6; // J/kg
  
  // Calculate asteroid mass
  const radius = diameter / 2;
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  const mass = volume * density;
  
  // Kinetic energy calculation
  const kineticEnergy = 0.5 * mass * Math.pow(velocity * 1000, 2);
  
  // TNT equivalent estimate
  const tntEquivalent = kineticEnergy / tntEnergyPerKg;
  
  // Crater diameter using established scaling laws
  let craterDiameter = 0;
  if (diameter > 50) {
    craterDiameter = 1.8 * Math.pow(diameter, 0.78) * Math.pow(velocity / 12, 0.44);
  }
  
  // Seismic magnitude estimation
  const earthquakeMagnitude = Math.max(5.0, Math.min(9.5, 0.67 * Math.log10(tntEquivalent) - 5.87));
  
  // Location-dependent factors
  const isOcean = isOceanLocation(location.lat, location.lon);
  const populationDensity = getPopulationDensity(location.lat, location.lon);
  
  let casualties = 0;
  let economicDamage = 0;
  
  if (isOcean) {
    // Ocean impact considerations
    casualties = Math.min(10000000, Math.pow(diameter/20, 2.5) * populationDensity * 0.001);
    economicDamage = Math.min(10000, Math.pow(diameter/20, 2) * 100);
  } else {
    // Land impact considerations
    casualties = Math.min(50000000, Math.pow(diameter/20, 3) * populationDensity * 0.01);
    economicDamage = Math.min(50000, Math.pow(diameter/20, 2.5) * 200);
  }
  
  return {
    kineticEnergy,
    tntEquivalent,
    craterDiameter,
    earthquakeMagnitude,
    casualties: Math.round(casualties),
    economicDamage: Math.round(economicDamage),
    impactType: isOcean ? 'Ocean impact scenario' : 'Land impact scenario'
  };
}

function displayImpactResults(results) {
  document.getElementById('kineticEnergy').textContent = formatScientific(results.kineticEnergy) + ' Joules';
  document.getElementById('tntEquivalent').textContent = formatLargeNumber(results.tntEquivalent / 1000) + ' kilotons TNT';
  document.getElementById('craterDiameter').textContent = 
    results.craterDiameter > 0 ? formatLargeNumber(results.craterDiameter) + ' meters diameter' : 'Atmospheric disruption - no crater formation expected';
  document.getElementById('earthquakeMagnitude').textContent = results.earthquakeMagnitude.toFixed(1) + ' (approximate)';
  document.getElementById('casualties').textContent = formatLargeNumber(results.casualties) + ' people potentially affected';
  document.getElementById('economicDamage').textContent = '$' + formatLargeNumber(results.economicDamage) + ' billion (preliminary estimate)';
  
  const resultsPanel = document.getElementById('resultsPanel');
  if (resultsPanel) {
    resultsPanel.style.display = 'block';
    resultsPanel.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateImpactVisualization(results) {
  const impactRadius = document.getElementById('impactRadius');
  const impactPoint = document.getElementById('impactPoint');
  
  if (!impactRadius || !impactPoint) return;
  
  const radius = Math.min(80, Math.sqrt(results.craterDiameter / 1000) * 15);
  
  impactRadius.setAttribute('cx', impactPoint.getAttribute('cx'));
  impactRadius.setAttribute('cy', impactPoint.getAttribute('cy'));
  impactRadius.setAttribute('r', radius);
  impactRadius.style.opacity = '0.4';
  
  // Add visualization effect
  impactPoint.style.animation = 'pulse 2s infinite';
  setTimeout(() => {
    if (impactPoint) impactPoint.style.animation = '';
  }, 6000);
}

// Deflection strategies functionality
function initializeDeflectionStrategies() {
  renderDeflectionStrategies();
  setupStrategyComparison();
}

function renderDeflectionStrategies() {
  const grid = document.getElementById('strategiesGrid');
  if (!grid) return;
  
  grid.innerHTML = asteroidData.deflection_methods.map(method => `
    <div class="strategy-card ${method.status.toLowerCase().replace(/[\s]/g, '')}">
      <div class="strategy-status ${method.status.toLowerCase().replace(/[\s]/g, '')}">${method.status}</div>
      <div class="strategy-name">${method.name}</div>
      <div class="strategy-description">${method.description}</div>
      
      <div class="strategy-specs">
        <div class="spec-grid">
          <div class="spec-item">
            <div class="spec-label">Assessment Rating</div>
            <div class="spec-value">${method.effectiveness_rating}/10</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Estimated Cost</div>
            <div class="spec-value">$${method.cost_billions}B</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Mission Duration</div>
            <div class="spec-value">${method.mission_duration_years} years</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Technology Level</div>
            <div class="spec-value">${method.technology_readiness}/9</div>
          </div>
        </div>
        
        <div class="strategy-details">
          <div class="best-for"><strong>Optimal Application:</strong> ${method.best_for}</div>
          <div class="example"><strong>Development Status:</strong> ${method.success_example}</div>
          <div class="assessment"><strong>Current Assessment:</strong> ${method.current_assessment}</div>
          
          <div class="pros-cons">
            <div class="pros">
              <strong>✅ Potential Advantages:</strong>
              <ul>${method.pros.map(pro => `<li>${pro}</li>`).join('')}</ul>
            </div>
            <div class="cons">
              <strong>⚠️ Challenges & Limitations:</strong>
              <ul>${method.cons.map(con => `<li>${con}</li>`).join('')}</ul>
            </div>
          </div>
          
          <div class="research-status">
            <strong>Ongoing Research:</strong> ${method.ongoing_research}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function setupStrategyComparison() {
  const warningTimeSlider = document.getElementById('warningTimeSlider');
  const strategyDiameterSlider = document.getElementById('strategyDiameterSlider');
  
  if (warningTimeSlider) {
    warningTimeSlider.addEventListener('input', updateStrategyComparison);
  }
  if (strategyDiameterSlider) {
    strategyDiameterSlider.addEventListener('input', updateStrategyComparison);
  }
  
  updateStrategyComparison();
}

function updateStrategyComparison() {
  const warningTimeSlider = document.getElementById('warningTimeSlider');
  const strategyDiameterSlider = document.getElementById('strategyDiameterSlider');
  const warningTimeValue = document.getElementById('warningTimeValue');
  const strategyDiameterValue = document.getElementById('strategyDiameterValue');
  
  if (!warningTimeSlider || !strategyDiameterSlider) return;
  
  const warningTime = parseInt(warningTimeSlider.value);
  const diameter = parseInt(strategyDiameterSlider.value);
  
  if (warningTimeValue) warningTimeValue.textContent = warningTime;
  if (strategyDiameterValue) strategyDiameterValue.textContent = diameter;
  
  updateEffectivenessChart(warningTime, diameter);
}

function updateEffectivenessChart(warningTime, diameter) {
  const ctx = document.getElementById('effectivenessChart');
  if (!ctx) return;
  
  if (effectivenessChart) {
    effectivenessChart.destroy();
  }
  
  // Calculate preliminary effectiveness estimates
  const strategies = asteroidData.deflection_methods.map(method => {
    let effectiveness = 0;
    
    if (warningTime >= (method.mission_duration_years || 1)) {
      const baseEffectiveness = method.effectiveness_rating * 10;
      const sizeModifier = Math.max(0.2, 1 - (diameter - 100) / 1000);
      const timeBonus = Math.min(1.3, warningTime / (method.mission_duration_years || 1));
      
      effectiveness = Math.min(100, baseEffectiveness * sizeModifier * timeBonus);
    }
    
    return {
      name: method.name,
      effectiveness: Math.round(effectiveness),
      status: method.status
    };
  });
  
  effectivenessChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: strategies.map(s => s.name),
      datasets: [{
        label: 'Preliminary Effectiveness Assessment (%)',
        data: strategies.map(s => s.effectiveness),
        backgroundColor: strategies.map(s => {
          if (s.status === 'DEMONSTRATED CAPABILITY') return '#1FB8CD';
          if (s.status === 'UNDER RESEARCH') return '#FFC185';
          return '#B4413C';
        }),
        borderColor: strategies.map(s => {
          if (s.status === 'DEMONSTRATED CAPABILITY') return '#217a85';
          if (s.status === 'UNDER RESEARCH') return '#cc9b6b';
          return '#8f3530';
        }),
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const method = asteroidData.deflection_methods[context.dataIndex];
              return [
                `Estimated Effectiveness: ${context.parsed.y}%`,
                `Development Status: ${method.status}`,
                `Estimated Cost: $${method.cost_billions}B`,
                `Technology Readiness: ${method.technology_readiness}/9`
              ];
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--color-text-secondary').trim(),
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            color: getComputedStyle(document.body).getPropertyValue('--color-border').trim()
          }
        },
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--color-text-secondary').trim(),
            maxRotation: 45
          },
          grid: {
            color: getComputedStyle(document.body).getPropertyValue('--color-border').trim()
          }
        }
      }
    }
  });
}

// Risk map functionality
function initializeRiskMap() {
  const toggles = document.querySelectorAll('#risk-map input[type="checkbox"]');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('change', updateRiskLayers);
  });
  
  renderScenarioComparison();
}

function updateRiskLayers() {
  const populationLayer = document.getElementById('populationLayer')?.checked || false;
  const coastalLayer = document.getElementById('coastalLayer')?.checked || false;
  const infrastructureLayer = document.getElementById('infrastructureLayer')?.checked || false;
  const historicalLayer = document.getElementById('historicalLayer')?.checked || false;
  
  const populationOverlay = document.getElementById('populationOverlay');
  const coastalOverlay = document.getElementById('coastalOverlay');
  const historicalOverlay = document.getElementById('historicalOverlay');
  
  if (populationOverlay) {
    populationOverlay.style.display = populationLayer ? 'block' : 'none';
  }
  if (coastalOverlay) {
    coastalOverlay.style.display = coastalLayer ? 'block' : 'none';
  }
  if (historicalOverlay) {
    historicalOverlay.style.display = historicalLayer ? 'block' : 'none';
  }
  
  // Visual enhancement for infrastructure analysis
  const continents = document.getElementById('continents');
  if (continents) {
    if (infrastructureLayer) {
      continents.style.filter = 'hue-rotate(30deg) brightness(1.2)';
    } else {
      continents.style.filter = 'none';
    }
  }
}

function renderScenarioComparison() {
  const scenariosList = document.getElementById('scenariosList');
  if (!scenariosList) return;
  
  scenariosList.innerHTML = asteroidData.impact_scenarios.map(scenario => `
    <div class="scenario-card" onclick="loadScenarioIntoCalculator('${scenario.name}')">
      <div class="scenario-name">${scenario.name}</div>
      <div class="scenario-description">${scenario.description}</div>
      
      <div class="scenario-stats">
        <div class="scenario-stat">
          <span class="stat-value">${scenario.energy_megatons}MT</span>
          <span class="stat-label">Energy Release</span>
        </div>
        <div class="scenario-stat">
          <span class="stat-value">${scenario.frequency}</span>
          <span class="stat-label">Occurrence Rate</span>
        </div>
        <div class="scenario-stat">
          <span class="stat-value">${scenario.assessment_confidence}</span>
          <span class="stat-label">Assessment Level</span>
        </div>
        <div class="scenario-stat">
          <span class="stat-value">$${scenario.economic_damage_millions}M</span>
          <span class="stat-label">Economic Impact</span>
        </div>
      </div>
    </div>
  `).join('');
}

function loadScenarioIntoCalculator(scenarioName) {
  const scenario = asteroidData.impact_scenarios.find(s => s.name === scenarioName);
  if (!scenario) return;
  
  // Navigate to assessment tool
  showSection('calculator');
  
  // Configure parameters
  const diameterSlider = document.getElementById('diameterSlider');
  if (diameterSlider) {
    diameterSlider.value = scenario.diameter_m;
    updateDiameterDisplay();
  }
  
  // Reset impact location selection
  currentImpactLocation = null;
  const impactPoint = document.getElementById('impactPoint');
  if (impactPoint) {
    impactPoint.style.opacity = '0';
  }
  
  const locationDisplay = document.getElementById('locationDisplay');
  if (locationDisplay) {
    locationDisplay.innerHTML = `
      Scenario loaded: <strong>${scenarioName}</strong><br>
      <span class="coordinates">Please select impact coordinates on the regional map</span>
    `;
  }
}

// Tooltip functionality
function initializeTooltips() {
  const tooltip = document.getElementById('tooltip');
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => showTooltip(e, element.dataset.tooltip));
    element.addEventListener('mouseleave', hideTooltip);
    element.addEventListener('mousemove', (e) => updateTooltipPosition(e));
  });
  
  function showTooltip(event, text) {
    if (!tooltip) return;
    tooltip.querySelector('.tooltip-content').textContent = text;
    tooltip.classList.remove('hidden');
    updateTooltipPosition(event);
  }
  
  function updateTooltipPosition(event) {
    if (!tooltip || tooltip.classList.contains('hidden')) return;
    
    const rect = tooltip.getBoundingClientRect();
    let left = event.clientX - rect.width / 2;
    let top = event.clientY - rect.height - 10;
    
    // Ensure tooltip remains visible
    left = Math.max(10, Math.min(window.innerWidth - rect.width - 10, left));
    if (top < 10) top = event.clientY + 10;
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }
  
  function hideTooltip() {
    if (tooltip) tooltip.classList.add('hidden');
  }
}

// Utility functions
function updateLiveData() {
  // Simulate data synchronization
  const now = new Date();
  const timeString = now.toISOString().slice(0, 19).replace('T', ' ') + ' UTC';
  
  const lastUpdateElement = document.getElementById('lastUpdate');
  if (lastUpdateElement) {
    lastUpdateElement.textContent = timeString;
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatDistance(km) {
  if (km === 0) return 'Impact trajectory detected';
  if (km < 100000) return `${Math.round(km).toLocaleString()} km`;
  if (km < 1000000) return `${Math.round(km / 1000).toLocaleString()}K km`;
  return `${(km / 1000000).toFixed(1)}M km`;
}

function formatLargeNumber(num) {
  if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
  return Math.round(num).toString();
}

function formatScientific(num) {
  return num.toExponential(2);
}

function getSizeDescription(diameter) {
  if (diameter < 30) return 'small residential structure scale';
  if (diameter < 50) return 'city block scale';
  if (diameter < 100) return 'stadium scale';
  if (diameter < 300) return 'multiple city blocks scale';
  if (diameter < 500) return 'significant regional impact potential';
  if (diameter < 1000) return 'major regional consequences likely';
  return 'potentially global implications';
}

function getThreatStatusClass(level) {
  switch(level) {
    case 'HIGH': return 'warning';
    case 'MODERATE': return 'info';
    case 'LOW': return 'success';
    default: return 'info';
  }
}

function getLocationName(lat, lon) {
  // Regional classification for assessment purposes
  if (Math.abs(lat) < 30 && lon > -30 && lon < 50) return 'African Region';
  if (lat > 30 && lon > -30 && lon < 50) return 'European Region';
  if (lat > 30 && lon > 70 && lon < 140) return 'Asian Region';
  if (lat < -10 && lon > 110 && lon < 180) return 'Oceania Region';
  if (lon > -130 && lon < -60) return 'Americas Region';
  if (Math.abs(lat) < 60) return 'Ocean Region';
  return 'Polar Region';
}

function isOceanLocation(lat, lon) {
  // Simplified ocean identification for modeling purposes
  const isLand = (lat > 20 && lat < 70 && lon > -30 && lon < 50) || // Europe/Asia
                 (lat > -40 && lat < 40 && lon > -120 && lon < -30) || // Americas
                 (lat > -50 && lat < -10 && lon > 110 && lon < 160); // Australia
  return !isLand;
}

function getPopulationDensity(lat, lon) {
  // Simplified demographic analysis for assessment purposes
  const majorRegions = [
    {lat: 40.7, lon: -74, density: 10000}, // North American corridor
    {lat: 51.5, lon: 0, density: 8000},    // European corridor
    {lat: 35.7, lon: 139.7, density: 15000} // East Asian corridor
  ];
  
  let maxDensity = 100; // Baseline rural density
  majorRegions.forEach(region => {
    const distance = Math.sqrt(Math.pow(lat - region.lat, 2) + Math.pow(lon - region.lon, 2));
    if (distance < 10) {
      maxDensity = Math.max(maxDensity, region.density * (1 - distance / 10));
    }
  });
  
  return maxDensity;
}

function showLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.remove('hidden');
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.add('hidden');
}

// Make functions available globally
window.showSection = showSection;
window.viewThreatDetails = viewThreatDetails;
window.loadScenarioIntoCalculator = loadScenarioIntoCalculator;