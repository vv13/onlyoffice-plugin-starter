import { useEffect } from "react";
import yayJpg from "../assets/yay.jpg";

export default function HomePage() {
  useEffect(() => {
    window.Asc.plugin.init = function () {};
  }, []);

  const handleInsertData = () => {
    const text = "Hello World!";
    const variant = 2;

    switch (variant) {
      case 0: {
        // serialize command as text
        const sScript = `
          var oDocument = Api.GetDocument();
          oParagraph = Api.CreateParagraph();
          oParagraph.AddText('Hello world!');
          oDocument.InsertContent([oParagraph]);
        `;
        window.Asc.plugin.info.recalculate = true;
        window.Asc.plugin.executeCommand("close", sScript);
        break;
      }
      case 1: {
        // call command without external variables
        window.Asc.plugin.callCommand(function () {
          const oDocument = Api.GetDocument();
          const oParagraph = Api.CreateParagraph();
          oParagraph.AddText("Hello world!");
          oDocument.InsertContent([oParagraph]);
        }, true);
        break;
      }
      case 2: {
        // call command with external variables
        window.Asc.scope.text = text; // export variable to plugin scope
        window.Asc.plugin.callCommand(function () {
          const oDocument = Api.GetDocument();
          const oParagraph = Api.CreateParagraph();
          oParagraph.AddText(Asc.scope.text); // or oParagraph.AddText(scope.text);
          oDocument.InsertContent([oParagraph]);
        }, true);
        break;
      }
      default:
        break;
    }
  };
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <button onClick={handleInsertData}>Insert Hello</button>
    </div>
  );
}
