import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-sample.component.html',
  styleUrl: './chat-sample.component.scss'
})
export class ChatSampleComponent {
  message: string = "Hi";
  send_disabled: boolean = true;
  showBot: boolean = true;
  message_history: any[] = [
    { "message": "Hello, how can I help you?", "type": "bot" }
  ];


  form_submit(event: any) {
    event.preventDefault();
  }

  botClick() {
    this.showBot = !this.showBot;
  }

  message_typing() {
    let placeholder_span = document.getElementById("placeholder_span");
    placeholder_span ? placeholder_span.innerText = "" : "";
    this.send_disabled = false;
  }

  keydown(event: any) {
    if (event.keyCode == 13 && event.shiftKey) {

    }
    if (event.keyCode == 13 && !event.shiftKey) {
      event.preventDefault();
      this.send_chat();
    }
  }

  send_chat() {
    let elem = document.getElementById("message_div");
    this.message = String(elem?.innerText);
    if (this.message) {
      this.message_history.push({
        message: this.message,
        type: "user"
      });

      // this.generationService.send_chat(this.message).subscribe((data: any) => {
      //   if (data) {
      //     this.generationService.message_history.push({ "message": data.response, "type": "bot" });
      //     this.generationService.fetched_windows_input = data.WindowsDATA_ORDER;
      //   }
      // });
    }
    if (elem) {
      elem["innerText"] = "";
    }
  }

}
