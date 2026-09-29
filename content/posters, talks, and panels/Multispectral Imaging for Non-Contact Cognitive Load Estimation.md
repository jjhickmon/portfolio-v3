---
title: Multispectral Imaging for Non-Contact Cognitive Load Estimation
tags: multimodality, neuroscience
---
# Description
I conducted this work at [NASA's Johnson Space Center](https://www.nasa.gov/johnson/) over the summers in 2024 and 2025 as part of my [GEM Fellowship](https://www.gemfellowship.org/). I extended this work as part of my graduate research plan statement for the [NSF Graduate Research Fellowship](https://www.nsfgrfp.org/).

The goal of this project was to develop a non-contact system to estimate human cognitive load. Ando et. al. [1]'s work shows the feasibility of developing a custom time-extracted multi-spectral camera that quantifies neuron activations within the lateral Prefrontal Cortex (lPFC). This is crucial because the lPFC is involved in executive functions such as working memory, decision-making, and cognitive control.

NIR light can pass through the scalp, skull, and cerebrospinal fluid until it gets to the brain and is partially absorbed by oxygenated (HbO) and deoxygenated hemoglobin (HbR) through functional hyperemia, where blood flow increases when tissue is active from brain neurons. Applying the modified Beer-Lamber Law, I proposed the measurement of photon distribution to gauge hemoglobin concentration by quantifying a relative change in blood oxygenation. HbO and HbR have different light absorption properties, with HbO absorbing more light optimally ~850 nm (nanometers) and HbR absorbing more light at ~760 nm, so I focused on these two wavelengths of light within my system.

To quantify this, I proposed the creation of two multispectral cameras, each consisting of an NIR image sensor and two infrared light-emitting diodes with the two wavelengths of interest, 760 and 850 nms, then positioned the cameras and lights near the participant’s forehead to capture both sides of the lPFC. The project concluded with my argument of next steps to take in order to realize the system.

With proper hardware selection, I could measure lPFC blood oxygenation by tuning the shutter opening period and light pulse width. Finally, this shutter timing would improve Ando et al. [1]’s work by using the first detection of the reflected light pulse as a distance metric. Since some light will be reflected from the skull, I can calculate the user’s distance by subtracting the detection time from the light pulse time and then dividing it by the speed of light to get the subject’s distance from the camera. This is a standard method of calculating distance with NIR light, proven to work well.

[1] Ando, T., Nakamura, T., Fujii, T., Shiono, T., Nakamura, T., Suzuki, M., ... & Inoue, Y. (2019). Non-contact acquisition of brain function using a time-extracted compact camera. Scientific reports, 9(1), 17854.

# Talk
<iframe
  src="/Multispectral Imaging for Non-Contact Cognitive Load Estimation.pdf"
  style="width: 100%; height: auto; aspect-ratio: 16 / 9; border: none;">
</iframe>