import { Code2, Calculator, Minus, Square, X } from "lucide-react";

export function PythonMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true"><path className="python-top" d="M31 5C17 5 17 11 17 11v8h16v3H11S4 21 4 34s7 13 7 13h8V36s0-8 8-8h17s7 0 7-8v-8s1-7-20-7Zm-8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/><path className="python-bottom" d="M33 59c14 0 14-6 14-6v-8H31v-3h22s7 1 7-12-7-13-7-13h-8v11s0 8-8 8H20s-7 0-7 8v8s-1 7 20 7Zm8-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>;
}
export function CodeVisual() {
  return <div className="code-scene" aria-label="Illustrative Python code composition">
    <div className="code-window">
      <div className="window-bar"><span className="window-dots"><i/><i/><i/></span><span>hello_world.py</span><Code2 size={15}/></div>
      <div className="code-body">
        <div className="code-comment"># A little curiosity. A lot of possibility.</div>
        <div><span className="code-keyword">class</span> <span className="code-class">Developer</span>:</div>
        <div className="code-indent"><span className="code-keyword">def</span> <span className="code-function">__init__</span>(self):</div>
        <div className="code-indent-double">self.name = <span className="code-string">"Naga Chaithanya"</span></div>
        <div className="code-indent-double">self.focus = <span className="code-string">"Python"</span></div>
        <div className="code-indent-double">self.mindset = <span className="code-string">"Keep learning"</span></div><br/>
        <div className="code-indent"><span className="code-keyword">def</span> <span className="code-function">build</span>(self):</div>
        <div className="code-indent-double"><span className="code-keyword">return</span> curiosity + practice</div><br/>
        <div><span className="code-function">Developer</span>().build()<span className="code-cursor"/></div>
      </div>
      <div className="code-status"><span><span className="status-dot"/>Learning. Building. Improving.</span><span>Python</span></div>
    </div>
    <div className="python-tile"><PythonMark/><span>Made of curiosity.</span></div>
    <span className="scene-caption">Small programs. Meaningful progress.</span>
  </div>;
}
export function CalculatorVisual() {
  return <div className="calculator-scene">
    <div className="calculator-window" role="img" aria-label="Illustrative calculator interface displaying the expression (24 + 8) multiplied by 3, with result 96">
      <div className="calculator-title"><span><Calculator size={13}/> Smart Calculator</span><span className="calculator-window-icons"><Minus/><Square/><X/></span></div>
      <div className="calculator-screen"><span>(24 + 8) × 3</span><strong>96<span className="calculator-caret"/></strong></div>
      <div className="calculator-keys">{["C", "(", ")", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "±", "0", ".", "="].map((key, i) => <span key={key} className={key === "=" ? "calc-key calc-equals" : i % 4 === 3 ? "calc-key calc-operator" : key === "C" ? "calc-key calc-clear" : "calc-key"}>{key}</span>)}</div>
    </div>
    <span className="mockup-caption">ILLUSTRATIVE INTERFACE · NOT AN APPLICATION SCREENSHOT</span>
  </div>;
}