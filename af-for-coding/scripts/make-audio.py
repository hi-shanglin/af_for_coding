"""Original 30-second synthesized soundtrack; no external recordings."""
import math, random, wave, struct
from pathlib import Path
SR = 44100
DURATION = 30
rng = random.Random(24)
samples = [0.0] * (SR * DURATION)
def tone(start, length, freq, amp, decay=4):
    for j in range(int(length * SR)):
        i = int(start * SR) + j
        if i >= len(samples): break
        t = j / SR
        env = min(1, t / .008) * math.exp(-decay * t / length)
        samples[i] += amp * env * (math.sin(2*math.pi*freq*t) + .2*math.sin(4*math.pi*freq*t))
# 120 BPM pulse, restrained bass, a repeating D-minor arpeggio.
notes = [293.665, 440, 523.251, 659.255, 587.33, 523.251, 440, 349.228]
for step in range(120):
    start = step * .25
    tone(start, .4, notes[step % 8], .055 if step % 2 else .085, 5)
for beat in range(60):
    start = beat * .5
    tone(start, .4, [73.416, 65.406, 87.307, 55][(beat//8)%4], .10, 4)
    for j in range(int(.16*SR)):
        t = j/SR
        samples[int(start*SR)+j] += .14*math.exp(-28*t)*math.sin(2*math.pi*(48*t+2*(1-math.exp(-28*t))))
    for j in range(int(.035*SR)):
        samples[int((start+.25)*SR)+j] += rng.uniform(-1,1)*.028*math.exp(-j/(SR*.009))
for start in [0,5,11,18,25]:
    tone(start, 1.2, 880, .06, 6)
    tone(start+.06, 1.2, 1320, .035, 6)
for i in range(len(samples)):
    t=i/SR
    samples[i] *= min(1,t/.25,max(0,(30-t)/1.1))
out=Path(__file__).resolve().parents[1]/'public'/'signal.wav'
with wave.open(str(out),'wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(b''.join(struct.pack('<h',int(max(-1,min(1,s)) * 32767)) for s in samples))
print(out)
