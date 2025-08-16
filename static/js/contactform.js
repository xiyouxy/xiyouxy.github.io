        document
          .getElementById("contactForm")
          .addEventListener("submit", async function (e) {
            e.preventDefault();
            const form = e.target;
            const status = document.getElementById("formStatus");

            try {
              const data = new FormData(form);
              const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { Accept: "application/json" },
              });

              if (response.ok) {
                form.reset();
                status.style.display = "block";
                status.textContent = "提交成功，谢谢！";
                status.style.color = "green";
              } else {
                status.style.display = "block";
                status.textContent = "提交失败，请稍后再试。";
                status.style.color = "red";
              }
            } catch (error) {
              status.style.display = "block";
              status.textContent = "网络错误，请稍后重试。";
              status.style.color = "red";
            }
          });