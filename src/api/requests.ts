interface OptionsProps {
  method: string;
  headers?: {
    [key: string]: string;
  };
  body?: string;
}

async function request(url: string, options: object): Promise<object> {
  const response = await fetch(url, options);

  if (response.ok !== true) {
    throw await response.json();
  }

  return response.json();
}

function createOptions(method: string, data: object | null) {
  const options: OptionsProps = {
    method,
    headers: {},
  };

  if (data) {
    const headers = options.headers || {};
    headers["Content-Type"] = "application/json";
    options.headers = headers;
    options.body = JSON.stringify(data);
  }

  return options;
}

function get(endpoint: string) {
  return request(endpoint, createOptions("get", null));
}

function post(endpoint: string, data: object) {
  return request(endpoint, createOptions("post", data));
}

function update(endpoint: string, data: object) {
  return request(endpoint, createOptions("put", data));
}

function del(endpoint: string) {
  return request(endpoint, createOptions("delete", null));
}
export { get, post, update, del };
